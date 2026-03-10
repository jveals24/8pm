function buildSeries(name, type, isoStart, cadenceDays, watchUrl = "https://www.youtube.com/@equippingplace") {
  const items = [];
  const start = new Date(`${isoStart}T19:00:00`);
  const end = new Date("2026-12-31T23:59:59");
  for (let current = new Date(start); current <= end; current.setDate(current.getDate() + cadenceDays)) {
    items.push({
      name,
      type,
      date: new Date(current),
      month: current.toLocaleDateString("en-US", { month: "short" }),
      day: current.toLocaleDateString("en-US", { day: "numeric" }),
      fullDate: current.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
      time: "7:00 PM ET",
      location: type === "Livestream" ? "Online livestream" : "In person",
      watchUrl
    });
  }
  return items;
}

const healing = buildSeries("Healing Service", "Livestream", "2026-03-17", 14);
const study = buildSeries("Bible Study", "Livestream", "2026-03-12", 14);
const upcoming = [...healing, ...study].sort((a, b) => a.date - b.date);

module.exports = {
  healing,
  study,
  upcoming,
  nextEight: upcoming.slice(0, 8)
};
