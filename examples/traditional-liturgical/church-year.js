/* church-year.js: set the seasonal accent from the date (Western calendar).
   Part of the church-design skill (traditional-liturgical direction).

   What it does
   - Sets data-season="<key>" on <html> (advent, feast, ordinary, lent, holyweek,
     goodfriday, pentecost). Map each key to --color-season in CSS.
   - Fills any element with [data-season-label] with the season name.
   - Sets data-feast="<key>" on <html> and fills [data-feast-label] when the day
     is a principal feast that differs from its season (for example All Saints').
   - Fills [data-sunday-label] and [data-sunday-date] for the coming Sunday.

   Without JavaScript, the static data-season in your HTML stays, so always
   ship a sensible default. On WordPress or another CMS you can run the same
   logic server-side or set the season by hand.

   Usage
     <html data-season="ordinary">
     <script src="church-year.js" defer></script>
     <script>ChurchYear.apply({ feasts: true });</script>   // optional explicit call

   Traditions differ. Confirm colors and observed feasts with the church and
   record them in MINISTRY.md. Eastern/Orthodox calendars are not covered. */
(function (root) {
  "use strict";

  function easter(y) { // Anonymous Gregorian algorithm (Meeus/Jones/Butcher)
    var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
        f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3),
        h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4,
        l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
        n = h + l - 7 * m + 114;
    return new Date(y, Math.floor(n / 31) - 1, (n % 31) + 1);
  }
  function addDays(dt, n) { var r = new Date(dt); r.setDate(r.getDate() + n); return r; }
  function same(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function advent1(y) { // fourth Sunday before Christmas
    var xmas = new Date(y, 11, 25), wd = xmas.getDay();
    return addDays(xmas, -(wd === 0 ? 7 : wd) - 21);
  }

  function season(dt) {
    var y = dt.getFullYear(), e = easter(y), m = dt.getMonth(), d = dt.getDate();
    if (m === 11 && d >= 25) return { key: "feast", label: "Christmas" };
    if (dt >= advent1(y)) {
      var gaudete = addDays(advent1(y), 14);
      return { key: "advent", label: "Advent", gaudete: same(dt, gaudete) };
    }
    if (m === 0 && d <= 5) return { key: "feast", label: "Christmas" };
    if (m === 0 && d === 6) return { key: "feast", label: "The Epiphany" };
    var ash = addDays(e, -46), palm = addDays(e, -7);
    if (dt < ash) return { key: "ordinary", label: "Season after Epiphany" };
    if (dt < palm) return { key: "lent", label: "Lent" };
    if (dt < addDays(e, -2)) return { key: "holyweek", label: "Holy Week" };
    if (dt < addDays(e, -1)) return { key: "goodfriday", label: "Good Friday" };
    if (dt < e) return { key: "goodfriday", label: "Holy Saturday" };
    if (dt < addDays(e, 49)) return { key: "feast", label: "Easter" };
    if (dt < addDays(e, 50)) return { key: "pentecost", label: "Day of Pentecost" };
    return { key: "ordinary", label: "Season after Pentecost" };
  }

  // Principal feasts that fall inside a season with a different color.
  function feast(dt) {
    var y = dt.getFullYear(), e = easter(y);
    var list = [
      { date: addDays(e, 56), key: "feast", label: "Trinity Sunday" },
      { date: new Date(y, 7, 6), key: "feast", label: "The Transfiguration" },
      { date: new Date(y, 10, 1), key: "feast", label: "All Saints' Day" },
      { date: addDays(advent1(y), -7), key: "feast", label: "Christ the King" }
    ];
    for (var i = 0; i < list.length; i++) if (same(dt, list[i].date)) return list[i];
    // Many parishes keep All Saints' on the Sunday after November 1.
    var nov1 = new Date(y, 10, 1);
    if (dt.getDay() === 0 && nov1.getDay() !== 0 && dt > nov1 && dt <= addDays(nov1, 7))
      return { date: dt, key: "feast", label: "All Saints' Sunday" };
    return null;
  }

  // The coming Sunday (today if it is Sunday), with its season and any feast.
  function sunday(dt) {
    var d = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    d = addDays(d, (7 - d.getDay()) % 7);
    var s = season(d), f = feast(d);
    return { date: d, season: s, feast: f, label: f ? f.label : s.label };
  }

  function apply(opts) {
    opts = opts || {};
    var now = opts.date || new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var s = season(today), html = document.documentElement;
    html.setAttribute("data-season", s.key);
    if (s.gaudete && opts.gaudete !== false) html.setAttribute("data-gaudete", "");
    document.querySelectorAll("[data-season-label]").forEach(function (el) { el.textContent = s.label; });
    var f = opts.feasts === false ? null : feast(today);
    if (f) {
      html.setAttribute("data-feast", f.key);
      document.querySelectorAll("[data-feast-label]").forEach(function (el) { el.textContent = f.label; });
    }
    // "This Sunday" labels: [data-sunday-label] gets the feast or season name,
    // [data-sunday-date] gets a short date such as "November 1".
    var sun = sunday(today);
    document.querySelectorAll("[data-sunday-label]").forEach(function (el) { el.textContent = sun.label; });
    document.querySelectorAll("[data-sunday-date]").forEach(function (el) {
      el.textContent = sun.date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    });
    return { season: s, feast: f, sunday: sun };
  }

  root.ChurchYear = { easter: easter, advent1: advent1, season: season, feast: feast, sunday: sunday, apply: apply };
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(); });
    else apply();
  }
  if (typeof module !== "undefined") module.exports = root.ChurchYear;
})(typeof window !== "undefined" ? window : globalThis);
