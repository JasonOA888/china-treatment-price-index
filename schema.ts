// Zod schema for the ChinaHealth Open China Treatment Price Index 2026 (v1)
// Usage: import { PriceIndexFile } from "./schema"; PriceIndexFile.parse(json)
import { z } from "zod";

export const Tier = z.enum(["a", "b", "c", "u"]);
export const TierLabel = z.enum([
  "public_standard_or_official",
  "public_international_vip",
  "private",
  "unspecified_department",
]);
export const SourceType = z.enum([
  "official",
  "hospital_page",
  "news",
  "patient_reported",
  "peer_reviewed",
]);
export const Confidence = z.enum(["high", "medium", "low"]);
export const FigureKind = z.enum([
  "package_price", "list_price", "list_price_component", "cap", "average", "median",
  "national_level", "reference_cost", "single_case", "quote", "reported_range", "expert_estimate",
]);
export const Category = z.enum([
  "cardiac", "orthopedic", "cancer", "dental", "eye", "fertility",
  "checkup_imaging", "delivery", "general_surgery", "tcm", "other",
]);

const isoDateish = z.string().regex(/^$|^\d{4}(-\d{2}){0,2}$/, "YYYY, YYYY-MM, YYYY-MM-DD or empty");
const money = z.number().nonnegative().nullable();

export const PriceRecord = z
  .object({
    id: z.string().regex(/^cpi26-\d{3}$/),
    procedure_slug: z.string(),
    procedure_en: z.string(),
    procedure_zh: z.string(),
    category: Category,
    tier: Tier,
    tier_label: TierLabel,
    entity: z.string(),
    entity_type: z.enum(["public", "private", "private_domestic", "unspecified"]),
    city: z.string(),
    province: z.string(),
    cny_low: money,
    cny_high: money,
    usd_low_approx: money,
    usd_high_approx: money,
    cny_converted_from_usd: z.boolean(),
    original_amount: z.string(),
    figure_kind: FigureKind,
    inclusions: z.string(),
    source_url: z.string().url(),
    source_title: z.string(),
    source_type: SourceType,
    patient_reported: z.boolean(),
    date_published: isoDateish,
    date_checked: z.literal("2026-10-27"),
    confidence: Confidence,
    notes: z.string(),
    us_ref_usd_low: money,
    us_ref_usd_high: money,
    us_ref_basis: z.string(),
    us_ref_source: z.string(),
    us_ref_source_url: z.union([z.string().url(), z.literal("")]),
  })
  .refine((r) => r.cny_low === null || r.cny_high === null || r.cny_low <= r.cny_high, {
    message: "cny_low must be <= cny_high",
  })
  .refine((r) => r.cny_low !== null || r.cny_high !== null, {
    message: "a record needs at least one sourced CNY value",
  });

export const UsReference = z
  .object({
    low: z.number(),
    high: z.number(),
    basis: z.string(),
    source_name: z.string(),
    source_url: z.string().url(),
    source_type: z.enum(["cms", "kff", "bcbs", "peer_reviewed", "fair_health", "turquoise", "bluebook"]),
  })
  .nullable();

export const Procedure = z.object({
  slug: z.string(),
  name_en: z.string(),
  name_zh: z.string(),
  category: Category,
  us_reference: UsReference,
});

export const PriceIndexFile = z.object({
  metadata: z.object({
    name: z.string(),
    version: z.string(),
    short_name: z.string(),
    publisher: z.string(),
    license: z.literal("CC-BY-4.0"),
    date_checked: z.string(),
    currency: z.literal("CNY"),
    fx: z.object({ usd_cny: z.number(), date: z.string(), source: z.string(), rounding: z.string() }),
    tiers: z.record(Tier, z.string()),
    exclusions: z.string(),
    counts: z.object({ rows: z.number().int(), procedures: z.number().int() }),
  }),
  procedures: z.array(Procedure),
  records: z.array(PriceRecord),
});

export type PriceRecordT = z.infer<typeof PriceRecord>;
export type PriceIndexFileT = z.infer<typeof PriceIndexFile>;
