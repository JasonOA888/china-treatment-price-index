# ChinaHealth Open China Treatment Price Index 2026 (v1)

Published prices for **41 procedures** that foreign patients commonly seek in China, in **92 records** across three hospital tiers, each with a source URL, source type, publication date, check date (2026-10-27) and confidence rating. 14 procedures carry a citable US reference price.

China has no national treatment price list. This dataset puts official caps and averages, public hospital package prices, VIP (特需) prices and private hospital prices side by side, with no numbers we could not source.

- Primary currency: CNY. USD approximations at **1 USD = 6.6681 CNY** (ECB rate, 2026-10-26).
- License: **CC BY 4.0**.
- Publisher: ChinaHealth, https://chinahealth.info (independent; sells no services, takes no commissions).

## Files

| File | What it is |
|---|---|
| `china_price_index_2026_v1.csv` | Flat table, one row per published price (UTF-8) |
| `china_price_index_2026_v1.json` | Same records plus metadata and a procedure table with US references |
| `schema.ts` | Zod schema (validates the JSON) |
| `METHODOLOGY.md` / `方法说明.md` | Sources, tiers, exclusions, conversion, limitations, corrections policy |
| `DATASHEET.md` | Datasheet for datasets (motivation, composition, collection, uses) |
| `key_findings.md` | Five sourced findings, each with a caveat |
| `china_vs_us_price_index_2026.png` | Chart: China range by tier vs US reference, 12 procedures, log scale |
| `CITATION.cff` | Citation metadata |
| `build_index.py`, `make_chart.py` | Scripts that produce the CSV/JSON/stats and the chart |

## Columns (CSV)

`id`, `procedure_slug`, `procedure_en`, `procedure_zh`, `category`, `tier` (a / b / c / u), `tier_label`, `entity`, `entity_type`, `city`, `province`, `cny_low`, `cny_high`, `usd_low_approx`, `usd_high_approx`, `cny_converted_from_usd`, `original_amount`, `figure_kind`, `inclusions`, `source_url`, `source_title`, `source_type` (official / hospital_page / news / patient_reported / peer_reviewed), `patient_reported`, `date_published`, `date_checked`, `confidence` (high / medium / low), `notes`, `us_ref_usd_low`, `us_ref_usd_high`, `us_ref_basis`, `us_ref_source`, `us_ref_source_url`.

Empty cells mean no source was found. Read `figure_kind` and `inclusions` before comparing numbers: a device price, a cap and an all-inclusive package are different things.

## Counts (v1.0.0)

- By tier: a 45, b 11, c 27, u 9.
- By source type: hospital page 52, official 24, news 7, patient-reported 6, peer-reviewed 3. Patient-reported flag set on 8 records (includes 2 patient stories published on government sites).
- By confidence: high 43, medium 38, low 11.

## Quick start

```python
import pandas as pd
df = pd.read_csv("china_price_index_2026_v1.csv")
df[(df.procedure_slug == "mri") & (~df.patient_reported)][["tier", "entity", "cny_low", "cny_high", "source_url"]]
```

```ts
import { PriceIndexFile } from "./schema";
const data = PriceIndexFile.parse(JSON.parse(fs.readFileSync("china_price_index_2026_v1.json", "utf8")));
```

## Publishing notes

- **GitHub:** repository root as is. Add a release tag `v1.0.0`.
- **Zenodo:** connect the GitHub repo, or upload the CSV, JSON, METHODOLOGY.md, 方法说明.md, DATASHEET.md and CITATION.cff. Resource type: Dataset. License: CC BY 4.0. Zenodo issues the DOI; add it to CITATION.cff afterwards.
- **Kaggle / Hugging Face:** upload the CSV and JSON; paste the DATASHEET as the dataset card; set license CC BY 4.0.

## How to cite

ChinaHealth (2026). *ChinaHealth Open China Treatment Price Index 2026* (Version 1.0.0) [Data set]. https://chinahealth.info/price-index. Data checked 2026-10-27.

## Corrections

Send a source link via chinahealth.info or open an issue. Every accepted change bumps the patch version and is logged below.

## Changelog

- **1.0.0 (2026-10-27):** first release. 41 procedures, 92 records.
