#!/usr/bin/env python3
"""WCAG 2.x contrast checker for color pairs. No dependencies.

Usage:
  python3 scripts/contrast.py "#1f2a44" "#faf7f2"
  python3 scripts/contrast.py "#ffffff" "#0a0e19@0.72"          # text over a scrim
  python3 scripts/contrast.py --pairs scripts/starter-palettes.txt

Colors are 3- or 6-digit hex. A background may be "#rrggbb@alpha" for a
translucent layer (scrim or tint). It is composited over white by default,
which is the worst case for white text on a bright photo. Use
"#rrggbb@alpha/#underlay" to composite over a specific color instead.

Pairs file: one pair per line,
  <foreground> <background> [min] [label]
where [min] is the required ratio: 4.5 (body text, default) or 3 (large text
24px+ or 19px+ bold, icons, borders, focus rings). Lines starting with "# "
(hash and space) or "//" are comments.

Exit code is 1 if any pair is below its required ratio.
"""
import sys


def _channel(c: float) -> float:
    c = c / 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def parse_hex(hex_color: str):
    h = hex_color.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(ch * 2 for ch in h)
    if len(h) != 6 or any(ch not in "0123456789abcdefABCDEF" for ch in h):
        raise ValueError(f"Not a 3- or 6-digit hex color: {hex_color}")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def parse(color: str):
    """Return an RGB tuple. Supports '#hex', '#hex@alpha', '#hex@alpha/#underlay'."""
    if "@" not in color:
        return parse_hex(color)
    top, rest = color.split("@", 1)
    if "/" in rest:
        alpha_s, under = rest.split("/", 1)
    else:
        alpha_s, under = rest, "#ffffff"
    alpha = float(alpha_s)
    if not 0 <= alpha <= 1:
        raise ValueError(f"Alpha must be between 0 and 1: {color}")
    t, u = parse_hex(top), parse_hex(under)
    return tuple(round(alpha * t[i] + (1 - alpha) * u[i]) for i in range(3))


def is_color(s: str) -> bool:
    try:
        parse(s)
        return True
    except (ValueError, IndexError):
        return False


def luminance(rgb) -> float:
    r, g, b = (_channel(v) for v in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(fg: str, bg: str) -> float:
    a, b = luminance(parse(fg)), luminance(parse(bg))
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)


def report(fg: str, bg: str, need: float = 4.5, label: str = "") -> bool:
    r = ratio(fg, bg)
    ok = r >= need
    kind = "body" if need >= 4.5 else "large/UI"
    status = "PASS" if ok else "FAIL"
    aaa = "  AAA" if r >= 7.0 else ""
    name = f"  {label}" if label else ""
    print(f"{fg:>9} on {bg:<16} {r:5.2f}:1  needs {need:g} ({kind}) {status}{aaa}{name}")
    return ok


def main(argv):
    if len(argv) >= 2 and argv[0] == "--pairs":
        all_ok = True
        with open(argv[1], encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("# ") or line == "#" or line.startswith("//"):
                    continue
                parts = line.split()
                if len(parts) < 2 or not (is_color(parts[0]) and is_color(parts[1])):
                    continue
                need, rest = 4.5, parts[2:]
                if rest:
                    try:
                        need = float(rest[0])
                        rest = rest[1:]
                    except ValueError:
                        pass
                all_ok = report(parts[0], parts[1], need, " ".join(rest)) and all_ok
        return 0 if all_ok else 1
    if len(argv) in (2, 3):
        need = float(argv[2]) if len(argv) == 3 else 4.5
        return 0 if report(argv[0], argv[1], need) else 1
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
