# Methodology: ChinaHealth Open China Treatment Price Index 2026 (v1)

Version 1.0.0. Data checked 2026-10-27. Publisher: ChinaHealth (https://chinahealth.info). License: CC BY 4.0.

## 1. Purpose

China has no single national price list for treatments. Prices are set by provincial and city healthcare security bureaus, by hospitals for VIP (特需) services, and freely by private hospitals. This index collects published prices for 41 procedures that foreigners commonly seek, in one machine-readable file. Each figure has a named source, a publication date, the date we checked it, and a confidence rating.

ChinaHealth sells no medical services and takes no commissions. Nothing in this dataset is a quote, an offer or medical advice.

## 2. What a record is

One record (row) is one published price from one source for one procedure at one tier. A record holds a CNY low and high value. When a source gives one figure, low and high are equal. When a source gives only an upper bound (for example, a cap), the low cell is empty.

We never fill a cell without a source. Empty cells mean "no source found", not zero.

## 3. Tiers

| Code | Meaning |
|---|---|
| a | Public hospital general department, or an official government / NHSA price, price ceiling, reference cost or average |
| b | Public hospital international or VIP (特需) department |
| c | Private hospital. `entity_type` separates international-style private hospitals (United Family, Jiahui) from domestic private chains (`private_domestic`, e.g. Xiamen Eye Center) |
| u | Department not stated in the source. Used only for news and patient reports where we cannot tell which tier applied |

Tier a mixes two things on purpose, as the brief asked: real hospital prices (e.g. HKU-Shenzhen Hospital packages) and official reference values (caps, averages). The `figure_kind` column tells them apart.

## 4. Figure kinds

`package_price` (all-inclusive bundle), `list_price`, `list_price_component` (device or drug only), `cap` (government ceiling), `average`, `median`, `national_level` (official "about X" level), `reference_cost` (official payment reference), `single_case` (one patient's bill), `quote`, `reported_range`, `expert_estimate`.

Components and caps are not totals. Do not add components together to make a total; we did not.

## 5. Sources and source types

| source_type | Meaning |
|---|---|
| official | Government or NHSA publication, or an official document hosted by a hospital |
| hospital_page | Price list or package page published by the hospital itself |
| peer_reviewed | Journal article or academic handbook |
| news | Media report |
| patient_reported | A figure from one patient (forum post, blog, or patient story in the media) |

`patient_reported = true` flags any figure that comes from one patient's bill, including two patient stories published on government sites (NHSA Hebei knee case; Shanghai government patient story). Patient-reported figures stay in the dataset for transparency but are excluded from the chart and from key findings.

Main source families: NHSA (nhsa.gov.cn); Liaoning, Chongqing, Shanghai and Fujian healthcare security bureaus; the HKU-Shenzhen Hospital list of 67 all-inclusive packages (2025-06-04); hospital price pages from Peking Union Medical College Hospital, Peking University Shenzhen Hospital, Shenzhen Eye Hospital, Tongji Hospital Wuhan, West China Second University Hospital, Xiamen Eye Center, United Family Healthcare (Beijing, Shanghai, Shenzhen) and Jiahui; peer-reviewed studies (Frontiers in Public Health 2026; PMC CAR-T pricing study; PubMed CABG cost study).

## 6. Exclusions

- Stem-cell therapies and other unproven treatments are excluded. Earlier ChinaHealth price entries for stem-cell products (Boao) were deliberately not carried over.
- Prices from medical-travel agencies that sell services are excluded, except one CNN-reported agency quote, kept as tier u with low confidence.
- Cosmetic procedures are out of scope for v1.

## 7. Currency conversion

- All primary values are CNY.
- One rate for the whole file: **1 USD = 6.6681 CNY**, ECB reference rate for **2026-10-26**, retrieved via the Frankfurter API.
- `usd_low_approx` / `usd_high_approx` are rounded to the nearest 10 below USD 1,000 and to the nearest 100 at or above USD 1,000. They are approximations for reading convenience, not quotes.
- When a source reported USD only (5 records), we converted to CNY at the same rate, rounded to the nearest CNY 100, and set `cny_converted_from_usd = true` with the original in `original_amount`.
- We do not adjust for inflation. A 2019 price stays a 2019 price; check `date_published`.

## 8. US reference prices

US references sit in separate columns at procedure level (`us_ref_*`). They come only from citable sources: CMS Medicare Procedure Price Lookup (2026 national averages), Peterson-KFF Health System Tracker (2025), Blue Cross Blue Shield Health of America (2019), a 2024 Journal of the American Heart Association study using Turquoise Health price-transparency data, ASRM figures cited in a peer-reviewed review, and the EBMT/EHA CAR-T handbook. 14 of 41 procedures have one.

Medicare amounts are a payment floor: commercial and cash prices are usually higher. KFF birth figures include prenatal and postpartum care, so they are broader than a Chinese delivery package. Always read `us_ref_basis`.

## 9. Confidence

- **high**: official document or hospital price list, current (2024 or later) or structural (caps, package lists), scope clear.
- **medium**: official or hospital source that is older, undated, a reference cost, or a device-only price; or credible news with clear scope.
- **low**: single patient, forum, expert estimate, agency quote, or data older than 2019.

## 10. Limitations

- Coverage is uneven. Many cardiac and cancer procedures have only tier a data, and some procedures have only one source.
- Hospital pages are often undated. Where a page gives no date we leave `date_published` empty and say so in notes.
- Shanghai United Family surgery bundles are still linked from the live page but the images were uploaded in 2019-06 (from the file path). Treat them as possibly stale.
- Official caps and averages describe prices for insured local patients in public hospitals. Foreign self-pay patients may be billed the same list prices, but may also be steered to VIP departments.
- Package scopes differ (stay length, implants, drugs, complications cover). Compare `inclusions` before comparing numbers.
- Our searches were in Chinese and English, on 2026-10-26 and 2026-10-27. We will have missed sources.

## 11. Corrections policy

Email corrections with a source link to the ChinaHealth contact on chinahealth.info, or open a GitHub issue. We check every report, correct or remove the record, bump the patch version (1.0.x), and log the change in the README changelog with the record ID. We do not accept payment or listings in exchange for edits.

## 12. License and citation

Data and documentation: Creative Commons Attribution 4.0 International (CC BY 4.0). You may share and adapt, including commercially, with attribution.

**How to cite:** ChinaHealth (2026). *ChinaHealth Open China Treatment Price Index 2026* (Version 1.0.0) [Data set]. https://chinahealth.info/price-index. Data checked 2026-10-27.
