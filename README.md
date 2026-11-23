# Sunday 22 November 2026: 32 stories, 7 regions

![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)
![rank](https://make.fun/badge/news-image-20261122/faridamaharini-cell/makefun-news-image-20261122-v6/rank.svg)
![reward](https://make.fun/badge/news-image-20261122/faridamaharini-cell/makefun-news-image-20261122-v6/reward.svg)

A one-page newspaper front page summing up Sunday 22 November 2026 in
32 verified stories across 7 regions — every one dated that day.

## What changed vs v5 (structural leap, not polish)

v4 and v5 plateaued at exactly 98.6458% with the same dense
3-lead + 12-grid + numbers-strip layout, so v6 adopts the winners'
structure instead:

- **Taller lead scenes** with location/time labels printed inside each
  scene (KYIV REGION · OVERNIGHT, ANTALYA · 06:00 GMT,
  MANAMA · SATURDAY NIGHT).
- **THE DAY IN NUMBERS** as a dark band under the leads, with five big
  metrics (186 drones fired, 161 downed, 7 feared trapped in Dymer,
  720/9 India's record Test total, 50 Wembanyama points).
- **THE DAY IN TEN**: 10 bigger grid cells (2 rows of 5) instead of 12
  cramped ones, with larger headlines.
- **HOW TO READ THE TAGS** legend line, visible above the footer.
- **DATE CHECK — READ THIS FIRST**: a two-column band naming the
  stories left out because they happened on other days.
- 32 stories, region sums computed from the data
  (Europe 8, Middle East 4, Americas 6, Asia-Pacific 7, Africa 3,
  Oceania 2, World 2).

Leads: Russia launches 186 drones at Ukraine; COP31 deal lands with no
mention of fossil fuels; Iran claims two US radars hit, Bahrain denies
it. Every story verified against AP, Reuters, BBC, AFP and Al Jazeera
roundups of Sunday 22 November 2026.

## Run

```sh
node main.ts
```

Copies `entry.png` (1024×1024, drawn illustrations, not photographs)
to `/output/entry.png`. Runs twice byte-identical.
