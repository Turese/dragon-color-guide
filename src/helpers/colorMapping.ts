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
import {
  BOULDER_MYRID,
  BOULDER_MYRID_KEYS,
  BOULDER_MYRID_MAIN,
} from "../constants/genes/BoulderMyrid";
import {
  BLEND_KEYS,
  FADE_BLEND,
  FADE_BLEND_MAIN,
  FADE_KEYS,
} from "../constants/genes/FadeBlend";
import {
  FERN_PAISLEY_KEYS,
  FERN_PAISLEY,
  FERN_PAISLEY_MAIN,
} from "../constants/genes/FernPaisley";
import {
  FLAIR_KEYS,
  FLAUNT_FLAIR,
  FLAUNT_FLAIR_MAIN,
  FLAUNT_KEYS,
} from "../constants/genes/FlauntFlair";

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
    case "Fade":
      return FADE_KEYS.map((key) =>
        makeMapping(key, color, FADE_BLEND, FADE_BLEND_MAIN),
      );
    case "Blend":
      return BLEND_KEYS.map((key) =>
        makeMapping(key, color, FADE_BLEND, FADE_BLEND_MAIN),
      );
    case "Flaunt":
      return FLAUNT_KEYS.map((key) =>
        makeMapping(key, color, FLAUNT_FLAIR, FLAUNT_FLAIR_MAIN),
      );
    case "Flair":
      return FLAIR_KEYS.map((key) =>
        makeMapping(key, color, FLAUNT_FLAIR, FLAUNT_FLAIR_MAIN),
      );
    case "Fern":
    case "Paisley":
      return FERN_PAISLEY_KEYS.map((key) =>
        makeMapping(key, color, FERN_PAISLEY, FERN_PAISLEY_MAIN),
      );
    case "Boulder":
    case "Myrid":
      return BOULDER_MYRID_KEYS.map((key) =>
        makeMapping(key, color, BOULDER_MYRID, BOULDER_MYRID_MAIN),
      );
    default:
      return [];
  }
}
