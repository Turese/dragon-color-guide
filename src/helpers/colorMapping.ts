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
import { BATTY, BATTY_KEYS, BATTY_MAIN } from "../constants/genes/Batty";
import {
  BOA_KEYS,
  BOA_SADDLE,
  BOA_SADDLE_MAIN,
  SADDLE_KEYS,
} from "../constants/genes/BoaSaddle";
import {
  BOULDER_MYRID,
  BOULDER_MYRID_KEYS,
  BOULDER_MYRID_MAIN,
} from "../constants/genes/BoulderMyrid";
import {
  CATERPILLAR_KEYS,
  CATERPILLAR_LARVAE,
  CATERPILLAR_LARVAE_MAIN,
  LARVAE_KEYS,
} from "../constants/genes/CaterpillarLarvae";
import {
  CHOIR_KEYS,
  CHORUS_CHOIR,
  CHORUS_CHOIR_MAIN,
  CHORUS_KEYS,
} from "../constants/genes/ChorusChoir";
import {
  BLAZE_KEYS,
  CINDER_BLAZE,
  CINDER_BLAZE_MAIN,
  CINDER_KEYS,
} from "../constants/genes/CinderBlaze";
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
import {
  HARLEQUIN_JESTER,
  HARLEQUIN_JESTER_MAIN,
  HARLEQUIN_KEYS,
  JESTER_KEYS,
} from "../constants/genes/HarlequinJester";
import {
  MONOCOLOR_TERTS,
  MONOCOLOR_TERTS_KEY,
  MONOCOLOR_TERTS_MAIN,
} from "../constants/genes/MonocolorTerts";
import {
  PEACOCK,
  PEACOCK_KEYS,
  PEACOCK_MAIN,
} from "../constants/genes/Peacock";

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
    case "Caterpillar":
      return CATERPILLAR_KEYS.map((key) =>
        makeMapping(key, color, CATERPILLAR_LARVAE, CATERPILLAR_LARVAE_MAIN),
      );
    case "Larvae":
      return LARVAE_KEYS.map((key) =>
        makeMapping(key, color, CATERPILLAR_LARVAE, CATERPILLAR_LARVAE_MAIN),
      );
    case "Peacock":
      return PEACOCK_KEYS.map((key) =>
        makeMapping(key, color, PEACOCK, PEACOCK_MAIN),
      );
    case "Batty":
      return BATTY_KEYS.map((key) =>
        makeMapping(key, color, BATTY, BATTY_MAIN),
      );
    case "Boa":
      return BOA_KEYS.map((key) =>
        makeMapping(key, color, BOA_SADDLE, BOA_SADDLE_MAIN),
      );
    case "Saddle":
      return SADDLE_KEYS.map((key) =>
        makeMapping(key, color, BOA_SADDLE, BOA_SADDLE_MAIN),
      );
    case "Blaze":
      return BLAZE_KEYS.map((key) =>
        makeMapping(key, color, CINDER_BLAZE, CINDER_BLAZE_MAIN),
      );
    case "Cinder":
      return CINDER_KEYS.map((key) =>
        makeMapping(key, color, CINDER_BLAZE, CINDER_BLAZE_MAIN),
      );
    case "Harlequin":
      return HARLEQUIN_KEYS.map((key) =>
        makeMapping(key, color, HARLEQUIN_JESTER, HARLEQUIN_JESTER_MAIN),
      );
    case "Jester":
      return JESTER_KEYS.map((key) =>
        makeMapping(key, color, HARLEQUIN_JESTER, HARLEQUIN_JESTER_MAIN),
      );
    case "Chorus":
      return CHORUS_KEYS.map((key) =>
        makeMapping(key, color, CHORUS_CHOIR, CHORUS_CHOIR_MAIN),
      );
    case "Choir":
      return CHOIR_KEYS.map((key) =>
        makeMapping(key, color, CHORUS_CHOIR, CHORUS_CHOIR_MAIN),
      );
    case "Underbelly":
    case "Kumo":
    case "Points":
    case "Circuit":
    case "Contour":
    case "Smirch":
    case "Smoke":
    case "Darts":
    case "Polkadot":
      return MONOCOLOR_TERTS_KEY.map((key) =>
        makeMapping(key, color, MONOCOLOR_TERTS, MONOCOLOR_TERTS_MAIN),
      );
    default:
      return [];
  }
}

export function getMainColorMapping() {
  return;
}
