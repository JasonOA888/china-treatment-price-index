# Datasheet: ChinaHealth Open China Treatment Price Index 2026 (v1)

Format follows "Datasheets for Datasets" (Gebru et al.). Also usable as a Hugging Face / Kaggle dataset card.

```yaml
license: cc-by-4.0
language: [en, zh]
pretty_name: ChinaHealth Open China Treatment Price Index 2026
size_categories: [n<1K]
tags: [healthcare, prices, china, medical-tourism, open-data]
```

## Motivation
- **Why created:** China has no national treatment price list. Journalists, researchers, AI systems and foreign patients repeat unsourced figures. This dataset gives sourced, dated figures in one place.
- **Who created it:** ChinaHealth (chinahealth.info), an independent, information-only guide. No funding from hospitals, agencies or insurers; ChinaHealth sells no services and takes no commissions.

## Composition
- **Instances:** 92 records, each a published price for one procedure, at one tier, from one source. 41 procedures in 11 categories (cardiac, orthopedic, cancer, dental, eye, fertility, checkup and imaging, delivery, general surgery, TCM, other).
- **Tiers:** a = public general / official (45), b = public international or VIP (11), c = private (27), u = department not stated (9).
- **Fields:** see README. Each record has CNY low/high, approximate USD, inclusions, source URL and type, publication date, check date, confidence, and procedure-level US reference columns.
- **Missing data:** cells are empty where no source exists. Several procedures have only one tier; 27 procedures have no US reference.
- **Sensitive data:** none. No personal data. Patient-reported figures come from public posts and articles and carry no identifiers beyond what the public source shows.
- **Not included:** stem-cell and other unproven treatments; cosmetic procedures; agency package prices (one CNN-reported quote kept as tier u, low confidence).

## Collection process
- Desk research on 2026-10-26 and 2026-10-27, in Chinese and English: NHSA and provincial healthcare security bureau documents, hospital price pages and PDFs, peer-reviewed papers, major news outlets, and a small number of patient posts.
- Figures were copied from the source, not estimated. Ranges reflect what the source states (or several items on one page, explained in `inclusions`).
- USD-only sources (5 records) were converted to CNY at 6.6681 and flagged.
- Raw source snapshots used for extraction (price lists, PDFs, images) are kept in `raw/` in the working repository.

## Preprocessing
- Per-eye prices doubled to both-eye prices only where stated in notes (Tongji SMILE).
- No inflation adjustment, no averaging across sources, no imputation.

## Uses
- **Intended:** journalism, research on price transparency, comparison of tier spreads, grounding for AI answers, a starting point for patients' own enquiries.
- **Not intended:** quoting a price to a patient, insurance pricing, or ranking hospitals by quality. Prices change; scopes differ.

## Distribution
- CC BY 4.0. CSV and JSON on GitHub, Zenodo (DOI), Kaggle and Hugging Face, and https://chinahealth.info/price-index.

## Maintenance
- Maintained by ChinaHealth. Corrections via chinahealth.info or GitHub issues; patch releases logged in README. Annual refresh planned (v2, 2027), with priority on gaps listed in METHODOLOGY.md section 10.
