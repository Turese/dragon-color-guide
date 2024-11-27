import {
  ABERRATION_GENE_MAPPINGS,
  AETHER_GENE_MAPPINGS,
  AURABOA_GENE_MAPPINGS,
  BANESCALE_GENE_MAPPINGS,
  DUSTHIDE_GENE_MAPPINGS,
  EVERLUX_GENE_MAPPINGS,
  GAOLER_GENE_MAPPINGS,
  GeneRecord_t,
  GeneCategory_t,
  Gene_t,
  MODERN_GENE_MAPPINGS,
  SANDSURGE_GENE_MAPPINGS,
  UNDERTIDE_GENE_MAPPINGS,
  VEILSPUN_GENE_MAPPINGS,
} from "./genes";

export const DRAGON_IDS = {
  Aberration: 20,
  Aether: 22,
  Auraboa: 24,
  Banescale: 18,
  Bogsneak: 14,
  Coatl: 12,
  Dusthide: 25,
  Everlux: 26,
  Fae: 1,
  Fathom: 16,
  Gaoler: 17,
  Guardian: 2,
  Imperial: 8,
  Mirror: 3,
  Nocturne: 11,
  Obelisk: 15,
  Pearlcatcher: 4,
  Ridgeback: 5,
  Sandsurge: 23,
  Skydancer: 13,
  Snapper: 9,
  Spiral: 7,
  Tundra: 6,
  Undertide: 21,
  Veilspun: 19,
  Wildclaw: 10,
};

export const GENE_MAPPINGS: Record<Dragon_t, GeneRecord_t> = {
  Aberration: ABERRATION_GENE_MAPPINGS,
  Aether: AETHER_GENE_MAPPINGS,
  Auraboa: AURABOA_GENE_MAPPINGS,
  Banescale: BANESCALE_GENE_MAPPINGS,
  Bogsneak: MODERN_GENE_MAPPINGS,
  Coatl: MODERN_GENE_MAPPINGS,
  Dusthide: DUSTHIDE_GENE_MAPPINGS,
  Everlux: EVERLUX_GENE_MAPPINGS,
  Fae: MODERN_GENE_MAPPINGS,
  Fathom: MODERN_GENE_MAPPINGS,
  Gaoler: GAOLER_GENE_MAPPINGS,
  Guardian: MODERN_GENE_MAPPINGS,
  Imperial: MODERN_GENE_MAPPINGS,
  Mirror: MODERN_GENE_MAPPINGS,
  Nocturne: MODERN_GENE_MAPPINGS,
  Obelisk: MODERN_GENE_MAPPINGS,
  Pearlcatcher: MODERN_GENE_MAPPINGS,
  Ridgeback: MODERN_GENE_MAPPINGS,
  Sandsurge: SANDSURGE_GENE_MAPPINGS,
  Skydancer: MODERN_GENE_MAPPINGS,
  Snapper: MODERN_GENE_MAPPINGS,
  Spiral: MODERN_GENE_MAPPINGS,
  Tundra: MODERN_GENE_MAPPINGS,
  Undertide: UNDERTIDE_GENE_MAPPINGS,
  Veilspun: VEILSPUN_GENE_MAPPINGS,
  Wildclaw: MODERN_GENE_MAPPINGS,
};

export type Dragon_t = keyof typeof DRAGON_IDS;

export const DRAGON_LIST: string[] = Object.keys(DRAGON_IDS);

export function dragonHasGene(
  breed: Dragon_t,
  category: GeneCategory_t,
  gene: Gene_t,
): boolean {
  return gene in GENE_MAPPINGS[breed][category];
}
