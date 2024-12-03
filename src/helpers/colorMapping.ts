import { Color_t } from "../constants/colors";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
  Gene_t,
  GeneCategory_t,
} from "../constants/genes";
import {
  BAR_KEYS,
  BAR_DAUB,
  BAR_DAUB_MAIN,
  DAUB_KEYS,
} from "../constants/genes/BarDaub";
import {
  BASIC_PRIMARY_KEYS,
  BASIC,
  BASIC_MAIN,
  BASIC_SECONDARY_KEYS,
} from "../constants/genes/Basic";

export type PrimaryMapping_t = Record<PrimaryGene_t, string[] | null>;
export type SecondaryMapping_t = Record<SecondaryGene_t, string[] | null>;
export type TertiaryMapping_t = Record<TertiaryGene_t, string[] | null>;

export type GeneColorMapping_t = {
  color: string;
  name: string;
  isPrimary?: boolean;
};

const makeMapping = (
  key: string,
  color: Color_t,
  mapping: Record<Color_t, Record<string, string>>,
  primaryMapping: Record<string, true>,
): GeneColorMapping_t => ({
  color: mapping[color][key],
  name: key,
  isPrimary: primaryMapping[key],
});

export function getGeneColorList(
  color: Color_t,
  gene: Gene_t,
  category: GeneCategory_t,
): Array<GeneColorMapping_t> {
  switch (gene) {
    case "Basic":
      if (category === "primary")
        return BASIC_PRIMARY_KEYS.map((key) =>
          makeMapping(key, color, BASIC, BASIC_MAIN),
        );
      else if (category === "secondary")
        return BASIC_SECONDARY_KEYS.map((key) =>
          makeMapping(key, color, BASIC, BASIC_MAIN),
        );
      else return []; // basic tertiary always does nothing
    case "Bar":
      return BAR_KEYS.map((key) =>
        makeMapping(key, color, BAR_DAUB, BAR_DAUB_MAIN),
      );
    case "Daub":
      return DAUB_KEYS.map((key) =>
        makeMapping(key, color, BAR_DAUB, BAR_DAUB_MAIN),
      );
    default:
      return [];
  }
}
