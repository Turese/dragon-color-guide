import { uniq } from "lodash";

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

const ABERRATION_PRIMARY_IDS = {
  Bar: 89,
  Basic: 0,
  Boa: 233,
  Boulder: 220,
  Cherub: 221,
  Cinder: 214,
  Clown: 222,
  Crystal: 91,
  Diamond: 93,
  Fade: 90,
  Falcon: 92,
  Fern: 223,
  Flaunt: 112,
  Giraffe: 94,
  Ground: 97,
  Harlequin: 224,
  Jaguar: 99,
  Leopard: 225,
  Lionfish: 100,
  Mosaic: 341,
  Orb: 102,
  Pharaoh: 101,
  Pinstripe: 226,
  Poison: 227,
  Ribbon: 105,
  Ripple: 228,
  Savanna: 103,
  Skink: 229,
  Slime: 106,
  Speckle: 98,
  Starmap: 230,
  Stitched: 107,
  Swirl: 104,
  Tapir: 95,
  Tide: 231,
  Vipera: 96,
  Wasp: 108,
};
const ABERRATION_SECONDARY_IDS = {
  Basic: 0,
  Bee: 108,
  Blaze: 214,
  Blend: 91,
  Breakup: 341,
  Clouded: 220,
  Constellation: 221,
  Current: 222,
  Daub: 89,
  Eel: 105,
  "Eye Spots": 223,
  Facet: 90,
  Fissure: 97,
  Flair: 112,
  Foam: 224,
  Freckle: 98,
  Hex: 94,
  Hypnotic: 96,
  Jester: 225,
  Marbled: 103,
  Myrid: 226,
  Noxtide: 100,
  Paisley: 227,
  Patchwork: 107,
  Peregrine: 92,
  Rosette: 99,
  Saddle: 233,
  Safari: 104,
  Sarcophagus: 101,
  Seraph: 228,
  Sludge: 106,
  Spade: 93,
  Spinner: 229,
  Striation: 95,
  Toxin: 230,
  Trail: 231,
  Weaver: 102,
};
const ABERRATION_TERTIARY_IDS = {
  Augment: 198,
  Basic: 0,
  Braids: 199,
  Capsule: 83,
  Carnivore: 162,
  Contour: 200,
  Fangs: 84,
  Fans: 201,
  Firebreather: 202,
  Firefly: 85,
  Flameforger: 197,
  Flecks: 104,
  Frills: 86,
  Ghost: 88,
  Glimmer: 94,
  Glowtail: 89,
  Jewels: 87,
  Koi: 203,
  Kumo: 80,
  Mucous: 81,
  Peacock: 90,
  Polkadot: 79,
  Polypore: 82,
  Riot: 211,
  Rockbreaker: 390,
  Scales: 92,
  Skeletal: 204,
  Smirch: 205,
  Sparkle: 96,
  Spines: 206,
  Stained: 207,
  Thorns: 208,
  Thundercrack: 311,
  Thylacine: 93,
  Underbelly: 132,
  Veined: 91,
};

const AETHER_PRIMARY_IDS = {
  Bar: 150,
  Basic: 0,
  Boa: 234,
  Boulder: 151,
  Candy: 167,
  Checkers: 319,
  Chrysocolla: 320,
  Cinder: 163,
  Clown: 169,
  Crystal: 321,
  Fade: 148,
  Falcon: 322,
  Fern: 323,
  Flaunt: 149,
  Giraffe: 324,
  Ground: 325,
  Harlequin: 326,
  Jaguar: 152,
  Jupiter: 153,
  Laced: 156,
  Lionfish: 158,
  Metallic: 157,
  Mosaic: 155,
  Orb: 288,
  Petals: 154,
  Piebald: 159,
  Python: 160,
  Ribbon: 327,
  Ripple: 328,
  Savanna: 329,
  Skink: 161,
  Slime: 336,
  Spool: 162,
  Starmap: 168,
  Stitched: 165,
  Tapir: 330,
  Tide: 164,
  Tiger: 331,
  Twinkle: 166,
  Varnish: 332,
  Vipera: 333,
  Wasp: 334,
  Wrought: 335,
};
const AETHER_SECONDARY_IDS = {
  Alloy: 157,
  Basic: 0,
  Bee: 319,
  Blaze: 163,
  Blend: 148,
  Breakup: 155,
  Butterfly: 154,
  Chess: 320,
  Constellation: 168,
  Current: 321,
  Daub: 150,
  Edged: 156,
  Eel: 322,
  "Eye Spots": 169,
  Facet: 323,
  Fissure: 324,
  Flair: 149,
  Flicker: 166,
  Foam: 164,
  Hex: 325,
  Hypnotic: 326,
  Icing: 167,
  Jester: 327,
  Lacquer: 328,
  Malachite: 329,
  Morph: 160,
  Myrid: 151,
  Noxtide: 158,
  Paint: 159,
  Paisley: 330,
  Patchwork: 165,
  Peregrine: 331,
  Rosette: 152,
  Saddle: 234,
  Safari: 332,
  Saturn: 153,
  Sludge: 336,
  Spinner: 161,
  Spire: 335,
  Striation: 333,
  Stripes: 334,
  Thread: 162,
  Weaver: 284,
};
const AETHER_TERTIARY_IDS = {
  Angler: 316,
  Basic: 0,
  Blossom: 336,
  Braids: 317,
  Branches: 318,
  Capsule: 319,
  Carnivore: 163,
  Circuit: 135,
  Contour: 136,
  Crackle: 320,
  Diaphanous: 321,
  Fans: 322,
  Firebreather: 306,
  Firefly: 328,
  Fishbone: 337,
  Flameforger: 340,
  Flecks: 323,
  Flutter: 141,
  Gembond: 137,
  Ghost: 324,
  Glowtail: 138,
  Keel: 139,
  Koi: 325,
  Lace: 142,
  Mandibles: 143,
  Medusa: 326,
  Monarch: 140,
  Nudibranch: 327,
  Ornaments: 329,
  Points: 146,
  Porcupine: 330,
  Sailfin: 331,
  Scales: 147,
  Smirch: 150,
  Smoke: 151,
  Soap: 338,
  Space: 149,
  Sparkle: 152,
  Spines: 153,
  Spores: 332,
  Stained: 145,
  Starfall: 209,
  Stinger: 148,
  Tentacles: 339,
  Thorns: 333,
  Thylacine: 334,
  Trickmurk: 271,
  Underbelly: 144,
  Veined: 335,
  Whiskers: 154,
  Wish: 155,
};

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

export type GeneRecord_t = {
  primary: Partial<Record<PrimaryGene_t, number>>;
  secondary: Partial<Record<SecondaryGene_t, number>>;
  tertiary: Partial<Record<TertiaryGene_t, number>>;
};

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

export const PRIMARY_GENES: PrimaryGene_t[] = uniq([
  ...Object.keys(MODERN_PRIMARY_IDS),
  ...Object.keys(ABERRATION_PRIMARY_IDS),
  ...Object.keys(AETHER_PRIMARY_IDS),
]).sort() as PrimaryGene_t[]; //todo: union all the ancient primary genes

export const SECONDARY_GENES: SecondaryGene_t[] = uniq([
  ...Object.keys(MODERN_SECONDARY_IDS),
  ...Object.keys(ABERRATION_SECONDARY_IDS),
  ...Object.keys(AETHER_SECONDARY_IDS),
]).sort() as SecondaryGene_t[]; //todo: union all the ancient primary genes

export const TERTIARY_GENES: TertiaryGene_t[] = uniq([
  ...Object.keys(MODERN_TERTIARY_IDS),
  ...Object.keys(ABERRATION_TERTIARY_IDS),
  ...Object.keys(AETHER_TERTIARY_IDS),
]).sort() as TertiaryGene_t[]; //todo: union all the ancient primary genes
