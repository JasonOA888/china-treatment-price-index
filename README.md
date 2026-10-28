# ChinaHealth Open China Treatment Price Index 2026 (v1.2.0)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23684545.svg)](https://doi.org/10.5281/zenodo.23684545)


Published prices for **41 procedures** that foreign patients commonly seek in China, in **115 records** across three hospital tiers, each with a source URL, source type, publication date, check date (most checked 2026-10-27 or 2026-10-28) and confidence rating. 14 procedures carry a citable US reference price.

China has no national treatment price list. This dataset puts official caps and averages, public hospital package prices, VIP (特需) prices and private hospital prices side by side, with no numbers we could not source.

- Primary currency: CNY. USD approximations at **1 USD = 6.6681 CNY** (ECB rate, 2026-10-26).
- License: **CC BY 4.0**.
- Publisher: ChinaHealth, https://chinahealth.info (independent; sells no services, takes no commissions).

## Files

| File | What it is |
|---|---|
| `china_price_index_2026_v1.2.0.csv` | Flat table, one row per published price (UTF-8) |
| `china_price_index_2026_v1.2.0.json` | Same records plus metadata and a procedure table with US references |
| `schema.ts` | Zod schema (validates the JSON) |
| `METHODOLOGY.md` / `方法说明.md` | Sources, tiers, exclusions, conversion, limitations, corrections policy |
| `DATASHEET.md` | Datasheet for datasets (motivation, composition, collection, uses) |
| `key_findings.md` / `china_vs_us_price_index_2026.png` | v1.0.0 findings and chart (not yet regenerated for 1.2.0) |
| `archive/v1.0.0/` | Previous release files |
| `CITATION.cff` | Citation metadata |
| `CHANGELOG.md` | Changes in 1.1.0 and 1.2.0 |

## Columns (CSV)

`id`, `procedure_slug`, `procedure_en`, `procedure_zh`, `category`, `tier` (a / b / c / u), `tier_label`, `entity`, `entity_type`, `city`, `province`, `cny_low`, `cny_high`, `usd_low_approx`, `usd_high_approx`, `cny_converted_from_usd`, `original_amount`, `figure_kind`, `inclusions`, `source_url`, `source_title`, `source_type` (official / hospital_page / news / patient_reported / peer_reviewed), `patient_reported`, `date_published`, `date_checked`, `confidence` (high / medium / low), `notes`, `us_ref_usd_low`, `us_ref_usd_high`, `us_ref_basis`, `us_ref_source`, `us_ref_source_url`.

Empty cells mean no source was found. Read `figure_kind` and `inclusions` before comparing numbers: a device price, a cap and an all-inclusive package are different things.

## Counts (v1.2.0)

- By tier: a 53, b 14, c 39, u 9.
- By source type: official 28, peer_reviewed 5, news 9, hospital_page 67, patient_reported 6.
- By confidence: high 57, low 15, medium 43.
- New in 1.2.0: optional `tier_group` column, 14 international-tier records (cpi26-102 to cpi26-115), 16 errata fixes. See CHANGELOG.md.

## Quick start

```python
import pandas as pd
df = pd.read_csv("china_price_index_2026_v1.2.0.csv")
df[(df.procedure_slug == "mri") & (~df.patient_reported)][["tier", "entity", "cny_low", "cny_high", "source_url"]]
```

```ts
import { PriceIndexFile } from "./schema";
const data = PriceIndexFile.parse(JSON.parse(fs.readFileSync("china_price_index_2026_v1.2.0.json", "utf8")));
```

## Publishing notes

- **GitHub:** repository root as is. Add a release tag `v1.0.0`.
- **Zenodo:** connect the GitHub repo, or upload the CSV, JSON, METHODOLOGY.md, 方法说明.md, DATASHEET.md and CITATION.cff. Resource type: Dataset. License: CC BY 4.0. Zenodo issues the DOI; add it to CITATION.cff afterwards.
- **Kaggle / Hugging Face:** upload the CSV and JSON; paste the DATASHEET as the dataset card; set license CC BY 4.0.

## How to cite

ChinaHealth (2026). *ChinaHealth Open China Treatment Price Index 2026* (Version 1.2.0) [Data set]. https://doi.org/10.5281/zenodo.23684545. Data checked 2026-10-28.

## Corrections

Send a source link via chinahealth.info or open an issue. Every accepted change bumps the patch version and is logged below.

## Changelog

- **1.2.0 (2026-10-28):** 115 records; adds 14 international-tier records, `tier_group`, 16 errata (includes the unreleased 1.1.0 changes).
- **1.0.0 (2026-10-27):** first release. 41 procedures, 92 records.
