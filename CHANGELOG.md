## 1.2.0 (released 2026-10-28) - data checked 2026-10-28

Previous live version: 1.1.0 (101 records). Note: Zenodo still shows 1.0.0; 1.1.0 was never deposited, so the next Zenodo version can go straight to 1.2.0 and should list the 1.1.0 changes too.

### Added: international tier (14 records, cpi26-102 to cpi26-115)
Prices from international private hospitals (tier c, entity_type private) and public hospital special-needs / international services (tier b), all taken from the hospitals' own price pages, flyers or price lists, plus two clearly labelled news figures for CAR-T. No facilitator or agency prices.
- Knee replacement: Shenzhen New Frontier United Family, one knee, 5 nights, CNY 42,000 to 110,000 (cpi26-102)
- Hip replacement: same hospital, 6 nights, CNY 76,000 to 118,750 (cpi26-103)
- Cataract: same hospital, monofocal IOL, per eye, CNY 8,000 to 10,000 (cpi26-104)
- Colonoscopy: same hospital, painless, CNY 5,500 to 8,000 (cpi26-105); SinoUnited Health CNY 8,800 (cpi26-107); First Affiliated Hospital of Sun Yat-sen University special-needs colonoscopy CNY 2,800 (cpi26-108, tier b)
- PCI with stent: Shenzhen New Frontier United Family, angiogram + PCI, 2 nights, CNY 58,000; +16,000 per extra stent (cpi26-106)
- Health checkup: Sun Yat-sen First Affiliated special-needs exam fee CNY 6,000 to 18,000 (cpi26-109, component, tier b); SinoUnited packages CNY 9,000 to 15,300 (cpi26-110)
- IVF: Tianjin United Family IVF-ICSI package CNY 39,800, drugs not listed (cpi26-111; flyer dated 2020-07 by file name)
- Dental implant: Tianjin United Family packages from CNY 20,880 (cpi26-112)
- Childbirth: Tianjin United Family prenatal care (weeks 12 to 40) + vaginal delivery, 3 nights, epidural, CNY 78,600 (cpi26-113)
- CAR-T: Jiahui International Hospital, one foreign patient's solid-tumour CAR-T infusion, CNY 990,000 (cpi26-114, news, patient-reported); SinoUnited "one fifth of 8 to 10 million yuan" (CNY 1.6 to 2.0 million derived, cpi26-115, low confidence)

### Schema (backward compatible)
- New optional field `tier_group` on every record: general (tier a), international (tier b, and tier c with entity_type private), domestic_private, unspecified. Metadata gains `tier_groups`.
- `date_checked` is now any ISO date (new rows 2026-10-28; older rows keep 2026-10-27). Consumers that use the v1.0 schema.ts literal must update to schema_v1.2.ts.
- Exact source wording for each new record is kept at the end of `notes` ("Source quote: ...").

### Fixed (errata)
- Duplicate id cpi26-092: the PUMCH knee average is now cpi26-101.
- metadata.counts corrected (was 92 rows; file had 101).
- cpi26-045 / 053 null city (Anhui); cpi26-048 reclassified as a single patient case; cpi26-042 removed a figure not in the source and a stray field; cpi26-029 no longer sums implant system and crown; cpi26-038, 076, 089, 007, 017, 018, 028 corrected; stale (pre-2020) and unverifiable (Reddit) records flagged in notes; three procedure_zh names normalised. Full list: errata.md.

### Unchanged
- FX: 1 USD = 6.6681 CNY (ECB, 2026-10-26) for all USD approximations, as in 1.0/1.1.
- No international-tier price found for CABG, LASIK, proton therapy, breast-cancer chemotherapy or MRI beyond the private-hospital MRI rows already in the index (cpi26-049 to 052).
