import { Color_t, COLORS } from "../constants/colors";
import {
  Gene_t,
  GeneCategory_t,
  PRIMARY_GENES,
  PrimaryGene_t,
  SECONDARY_GENES,
  SecondaryGene_t,
  TERTIARY_GENES,
  TertiaryGene_t,
} from "../constants/genes";

import {
  BASIC_PRIMARY,
  BASIC_SECONDARY,
} from "../constants/geneMap/primary-secondary/Basic";
import { BLEND, FADE } from "../constants/geneMap/primary-secondary/FadeBlend";
import { BAR, DAUB } from "../constants/geneMap/primary-secondary/BarDaub";
import { BOULDER_MYRID } from "../constants/geneMap/primary-secondary/BoulderMyrid";
import { FLAUNT } from "../constants/geneMap/primary-secondary/FlauntFlair";

export type PrimaryMapping_t = Record<PrimaryGene_t, string[] | null>;
export type SecondaryMapping_t = Record<SecondaryGene_t, string[] | null>;
export type TertiaryMapping_t = Record<TertiaryGene_t, string[] | null>;

function getFileForGene(gene: Gene_t, category: GeneCategory_t): string | null {
  switch (gene) {
    case "Basic":
      if (category === "primary") return BASIC_PRIMARY;
      else if (category === "secondary") return BASIC_SECONDARY;
      else return null;
    case "Fade":
      return FADE;
    case "Blend":
      return BLEND;
    case "Bar":
      return BAR;
    case "Daub":
      return DAUB;
    case "Boulder":
    case "Myrid":
      return BOULDER_MYRID;
    case "Flaunt":
    case "Flair":
      return FLAUNT;
    default:
      return null;
  }
}

export function getColorPrimaries(): Record<Color_t, string> {
  const rows = BASIC_SECONDARY.split("\n").map((row: string) => row.split(","));

  const result = COLORS.reduce(
    (acc, key) => {
      acc[key] = "#ffffff";
      return acc;
    },
    {} as Record<Color_t, string>,
  );
  rows.forEach((row: string[]) => {
    const color = row[0] as Color_t;
    const primary = row[1];
    result[color] = primary;
  });

  return result;
}

export function generatePrimaryMapping(color: Color_t): PrimaryMapping_t {
  return PRIMARY_GENES.reduce((acc, gene) => {
    const file = getFileForGene(gene, "primary");
    if (!file) {
      acc[gene] = null;
    } else {
      const index = COLORS.indexOf(color);
      const parsedMapping: string[][] = file
        .split("\n")
        .map((row: string) => row.split(","));
      acc[gene] = parsedMapping[index]?.splice(1) || null;
    }
    return acc;
  }, {} as PrimaryMapping_t);
}

export function generateSecondaryMapping(color: Color_t): SecondaryMapping_t {
  return SECONDARY_GENES.reduce((acc, gene) => {
    const file = getFileForGene(gene, "secondary");
    if (!file) {
      acc[gene] = null;
    } else {
      const index = COLORS.indexOf(color);
      const parsedMapping: string[][] = file
        .split("\n")
        .map((row: string) => row.split(","));
      acc[gene] = parsedMapping[index]?.splice(1) || null;
    }
    return acc;
  }, {} as SecondaryMapping_t);
}

export function generateTertiaryMapping(color: Color_t): TertiaryMapping_t {
  return TERTIARY_GENES.reduce((acc, gene) => {
    const file = getFileForGene(gene, "tertiary");
    if (!file) {
      acc[gene] = null;
    } else {
      const index = COLORS.indexOf(color);
      const parsedMapping: string[][] = file
        .split("\n")
        .map((row: string) => row.split(","));
      acc[gene] = parsedMapping[index]?.splice(1) || null;
    }
    return acc;
  }, {} as TertiaryMapping_t);
}
