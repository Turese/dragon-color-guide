/* 
the scrying workshop IDs of every primary gene 
ancient dragons have their own unique gene ids for every gene, including the parallel genes
*/
const MODERN_PRIMARY_IDS = {
  Bar: 337,
  Basic: 0,
  Boa: 232,
  Boulder: 110,
  Cherub: 10,
  Chorus: 337,
  Chrysocolla: 237,
  Cinder: 213,
  Clown: 3,
  Crystal: 7,
  Fade: 42,
  Falcon: 16,
  Fern: 136,
  Flaunt: 82,
  Giraffe: 12,
  Ground: 88,
  Harlequin: 170,
  Iridescent: 1,
  Jaguar: 19,
  Jupiter: 14,
  Laced: 26,
  Leopard: 40,
  Lionfish: 25,
  Metallic: 17,
  Mosaic: 58,
  Orb: 283,
  Petals: 13,
  Petrified: 318,
  Pharaoh: 87,
  Piebald: 9,
  Pinstripe: 22,
  Poison: 11,
  Python: 23,
  Ribbon: 84,
  Ripple: 5,
  Savanna: 18,
  Skink: 15,
  Slime: 41,
  Speckle: 4,
  Starmap: 24,
  Stitched: 59,
  Swirl: 57,
  Tapir: 21,
  Tide: 114,
  Tiger: 2,
  Vipera: 8,
  Wasp: 20,
};

const MODERN_SECONDARY_IDS = {
  Alloy: 17,
  Basic: 0,
  Bee: 20,
  Blaze: 213,
  Blend: 42,
  Breakup: 58,
  Butterfly: 13,
  Choir: 337,
  Clouded: 40,
  Constellation: 25,
  Current: 6,
  Daub: 7,
  Edged: 26,
  Eel: 84,
  "Eye Spots": 3,
  Facet: 8,
  Fissure: 88,
  Flair: 82,
  Foam: 113,
  Freckle: 4,
  Hex: 14,
  Hypnotic: 9,
  Jester: 170,
  Lode: 318,
  Malachite: 237,
  Marbled: 57,
  Morph: 23,
  Myrid: 149,
  Noxtide: 24,
  Paint: 10,
  Paisley: 136,
  Patchwork: 59,
  Peregrine: 11,
  Rosette: 19,
  Saddle: 232,
  Safari: 18,
  Sarcophagus: 87,
  Saturn: 15,
  Seraph: 5,
  Shimmer: 1,
  Sludge: 41,
  Spinner: 16,
  Striation: 21,
  Stripes: 2,
  Toxin: 12,
  Trail: 22,
  Weaver: 283,
};

const MODERN_TERTIARY_IDS = {
  Basic: 0,
  Capsule: 18,
  Circuit: 1,
  Contour: 13,
  Crackle: 6,
  Filigree: 21,
  Firebreather: 161,
  Firefly: 22,
  Flecks: 103,
  Gembond: 4,
  Ghost: 20,
  Glimmer: 10,
  Glowtail: 54,
  Keel: 53,
  Koi: 73,
  Lace: 16,
  Okapi: 9,
  Opal: 17,
  Peacock: 24,
  Points: 107,
  Polkadot: 168,
  Ringlets: 23,
  Runes: 14,
  Scales: 15,
  Smirch: 19,
  Smoke: 7,
  Soap: 105,
  Sparkle: 97,
  Spines: 8,
  Stained: 12,
  Thylacine: 11,
  Underbelly: 5,
  Veined: 38,
  Wish: 213,
};

/* ----------- */

const ABERRATION_PRIMARY_IDS = { Boa: 233 };
const ABERRATION_SECONDARY_IDS = {};
const ABERRATION_TERTIARY_IDS = {};

const AETHER_PRIMARY_IDS = { Boa: 234 };
const AETHER_SECONDARY_IDS = {};
const AETHER_TERTIARY_IDS = {};

const AURABOA_PRIMARY_IDS = { Boa: 239 };
const AURABOA_SECONDARY_IDS = {};
const AURABOA_TERTIARY_IDS = {};

const BANESCALE_PRIMARY_IDS = { Boa: 235 };
const BANESCALE_SECONDARY_IDS = {};
const BANESCALE_TERTIARY_IDS = {};

const DUSTHIDE_PRIMARY_IDS = {};
const DUSTHIDE_SECONDARY_IDS = {};
const DUSTHIDE_TERTIARY_IDS = {};

const EVERLUX_PRIMARY_IDS = {};
const EVERLUX_SECONDARY_IDS = {};
const EVERLUX_TERTIARY_IDS = {};

const GAOLER_PRIMARY_IDS = {};
const GAOLER_SECONDARY_IDS = {};
const GAOLER_TERTIARY_IDS = {};

const SANDSURGE_PRIMARY_IDS = {};
const SANDSURGE_SECONDARY_IDS = {};
const SANDSURGE_TERTIARY_IDS = {};

const UNDERTIDE_PRIMARY_IDS = {};
const UNDERTIDE_SECONDARY_IDS = {};
const UNDERTIDE_TERTIARY_IDS = {};

const VEILSPUN_PRIMARY_IDS = {};
const VEILSPUN_SECONDARY_IDS = {};
const VEILSPUN_TERTIARY_IDS = {};

type AncientPrimaryGene_t =
  | keyof typeof ABERRATION_PRIMARY_IDS
  | keyof typeof AURABOA_PRIMARY_IDS
  | keyof typeof AETHER_PRIMARY_IDS
  | keyof typeof BANESCALE_PRIMARY_IDS
  | keyof typeof DUSTHIDE_PRIMARY_IDS
  | keyof typeof EVERLUX_PRIMARY_IDS
  | keyof typeof GAOLER_PRIMARY_IDS
  | keyof typeof SANDSURGE_PRIMARY_IDS
  | keyof typeof UNDERTIDE_PRIMARY_IDS
  | keyof typeof VEILSPUN_PRIMARY_IDS;

type AncientSecondaryGene_t =
  | keyof typeof ABERRATION_SECONDARY_IDS
  | keyof typeof AURABOA_SECONDARY_IDS
  | keyof typeof AETHER_SECONDARY_IDS
  | keyof typeof BANESCALE_SECONDARY_IDS
  | keyof typeof DUSTHIDE_SECONDARY_IDS
  | keyof typeof EVERLUX_SECONDARY_IDS
  | keyof typeof GAOLER_SECONDARY_IDS
  | keyof typeof SANDSURGE_SECONDARY_IDS
  | keyof typeof UNDERTIDE_SECONDARY_IDS
  | keyof typeof VEILSPUN_SECONDARY_IDS;

type AncientTertiaryGene_t =
  | keyof typeof ABERRATION_TERTIARY_IDS
  | keyof typeof AURABOA_TERTIARY_IDS
  | keyof typeof AETHER_TERTIARY_IDS
  | keyof typeof BANESCALE_TERTIARY_IDS
  | keyof typeof DUSTHIDE_TERTIARY_IDS
  | keyof typeof EVERLUX_TERTIARY_IDS
  | keyof typeof GAOLER_TERTIARY_IDS
  | keyof typeof SANDSURGE_TERTIARY_IDS
  | keyof typeof UNDERTIDE_TERTIARY_IDS
  | keyof typeof VEILSPUN_TERTIARY_IDS;

export type PrimaryGene_t =
  | keyof typeof MODERN_PRIMARY_IDS
  | AncientPrimaryGene_t;

export type SecondaryGene_t =
  | keyof typeof MODERN_SECONDARY_IDS
  | AncientSecondaryGene_t;
export type TertiaryGene_t =
  | keyof typeof MODERN_TERTIARY_IDS
  | AncientTertiaryGene_t;

export type Gene_t = PrimaryGene_t | SecondaryGene_t | TertiaryGene_t;

export type GeneCategory_t = "primary" | "secondary" | "tertiary";

export type GeneRecord_t = Record<
  GeneCategory_t,
  Partial<Record<PrimaryGene_t, number>>
>;

export const MODERN_GENE_MAPPINGS: GeneRecord_t = {
  primary: MODERN_PRIMARY_IDS,
  secondary: MODERN_SECONDARY_IDS,
  tertiary: MODERN_TERTIARY_IDS,
};

export const ABERRATION_GENE_MAPPINGS: GeneRecord_t = {
  primary: ABERRATION_PRIMARY_IDS,
  secondary: ABERRATION_SECONDARY_IDS,
  tertiary: ABERRATION_TERTIARY_IDS,
};

export const AURABOA_GENE_MAPPINGS: GeneRecord_t = {
  primary: AURABOA_PRIMARY_IDS,
  secondary: AURABOA_SECONDARY_IDS,
  tertiary: AURABOA_TERTIARY_IDS,
};

export const AETHER_GENE_MAPPINGS: GeneRecord_t = {
  primary: AETHER_PRIMARY_IDS,
  secondary: AETHER_SECONDARY_IDS,
  tertiary: AETHER_TERTIARY_IDS,
};

export const BANESCALE_GENE_MAPPINGS: GeneRecord_t = {
  primary: BANESCALE_PRIMARY_IDS,
  secondary: BANESCALE_SECONDARY_IDS,
  tertiary: BANESCALE_TERTIARY_IDS,
};

export const DUSTHIDE_GENE_MAPPINGS: GeneRecord_t = {
  primary: DUSTHIDE_PRIMARY_IDS,
  secondary: DUSTHIDE_SECONDARY_IDS,
  tertiary: DUSTHIDE_TERTIARY_IDS,
};

export const EVERLUX_GENE_MAPPINGS: GeneRecord_t = {
  primary: EVERLUX_PRIMARY_IDS,
  secondary: EVERLUX_SECONDARY_IDS,
  tertiary: EVERLUX_TERTIARY_IDS,
};

export const GAOLER_GENE_MAPPINGS: GeneRecord_t = {
  primary: GAOLER_PRIMARY_IDS,
  secondary: GAOLER_SECONDARY_IDS,
  tertiary: GAOLER_TERTIARY_IDS,
};

export const SANDSURGE_GENE_MAPPINGS: GeneRecord_t = {
  primary: SANDSURGE_PRIMARY_IDS,
  secondary: SANDSURGE_SECONDARY_IDS,
  tertiary: SANDSURGE_TERTIARY_IDS,
};

export const UNDERTIDE_GENE_MAPPINGS: GeneRecord_t = {
  primary: UNDERTIDE_PRIMARY_IDS,
  secondary: UNDERTIDE_SECONDARY_IDS,
  tertiary: UNDERTIDE_TERTIARY_IDS,
};

export const VEILSPUN_GENE_MAPPINGS: GeneRecord_t = {
  primary: VEILSPUN_PRIMARY_IDS,
  secondary: VEILSPUN_SECONDARY_IDS,
  tertiary: VEILSPUN_TERTIARY_IDS,
};

export const PRIMARY_GENES: string[] = Object.keys(MODERN_PRIMARY_IDS); //todo: union all the ancient primary genes
export const SECONDARY_GENES: string[] = Object.keys(MODERN_SECONDARY_IDS); //todo: union all the ancient primary genes
export const TERTIARY_GENES: string[] = Object.keys(MODERN_TERTIARY_IDS); //todo: union all the ancient primary genes
