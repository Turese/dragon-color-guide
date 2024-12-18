import { Color_t } from "../constants/colors";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
  Gene_t,
  GeneCategory_t,
} from "../constants/genes";
import {
  ARAPAIMA_AROWANA,
  ARAPAIMA_AROWANA_MAIN,
  ARAPAIMA_KEYS,
  AROWANA_KEYS,
} from "../constants/genes/ArapaimaArowana";
import {
  ARC_KEYS,
  ARC_LOOP,
  ARC_LOOP_MAIN,
  LOOP_KEYS,
} from "../constants/genes/ArcLoop";
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
  CHECKERS_CHESS,
  CHECKERS_CHESS_MAIN,
  CHECKERS_KEYS,
  CHESS_KEYS,
} from "../constants/genes/CheckersChess";
import {
  CHERUB_KEYS,
  CHERUB_SERAPH,
  CHERUB_SERAPH_MAIN,
  SERAPH_KEYS,
} from "../constants/genes/CherubSeraph";
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
  CLOWN_EYESPOTS,
  CLOWN_EYESPOTS_MAIN,
  CLOWN_KEYS,
  EYESPOTS_KEYS,
} from "../constants/genes/ClownEyeSpots";
import {
  DISPLAY_KEYS,
  DISPLAY_PARADE,
  DISPLAY_PARADE_MAIN,
  PARADE_KEYS,
} from "../constants/genes/DisplayParade";
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
  GIRAFFE_HEX,
  GIRAFFE_HEX_MAIN,
  GIRAFFE_KEYS,
  HEX_KEYS,
} from "../constants/genes/GiraffeHex";
import {
  HARLEQUIN_JESTER,
  HARLEQUIN_JESTER_MAIN,
  HARLEQUIN_KEYS,
  JESTER_KEYS,
} from "../constants/genes/HarlequinJester";
import {
  JAGUAR_KEYS,
  JAGUAR_ROSETTE,
  JAGUAR_ROSETTE_MAIN,
  ROSETTE_KEYS,
} from "../constants/genes/JaguarRosette";
import {
  MONOCOLOR_TERTS,
  MONOCOLOR_TERTS_KEY,
  MONOCOLOR_TERTS_MAIN,
} from "../constants/genes/MonocolorTerts";
import {
  BREAKUP_KEYS,
  MOSAIC_BREAKUP,
  MOSAIC_BREAKUP_MAIN,
  MOSAIC_KEYS,
} from "../constants/genes/MosaicBreakup";
import {
  PEACOCK,
  PEACOCK_KEYS,
  PEACOCK_MAIN,
} from "../constants/genes/Peacock";
import {
  PINSTRIPE_KEYS,
  PINSTRIPE_TRAIL,
  PINSTRIPE_TRAIL_MAIN,
  TRAIL_KEYS,
} from "../constants/genes/PinstripeTrail";
import {
  POISON_KEYS,
  POISON_TOXIN,
  POISON_TOXIN_MAIN,
  TOXIN_KEYS,
} from "../constants/genes/PoisonToxin";
import {
  MORPH_KEYS,
  PYTHON_KEYS,
  PYTHON_MORPH,
  PYTHON_MORPH_MAIN,
} from "../constants/genes/PythonMorph";
import {
  EEL_KEYS,
  RIBBON_EEL,
  RIBBON_EEL_MAIN,
  RIBBON_KEYS,
} from "../constants/genes/RibbonEel";
import {
  SKINK_KEYS,
  SKINK_SPINNER,
  SKINK_SPINNER_MAIN,
  SPINNER_KEYS,
} from "../constants/genes/SkinkSpinner";
import {
  SLIME_KEYS,
  SLIME_SLUDGE,
  SLIME_SLUDGE_MAIN,
  SLUDGE_KEYS,
} from "../constants/genes/SlimeSludge";
import {
  LOAM_KEYS,
  SOIL_KEYS,
  SOIL_LOAM,
  SOIL_LOAM_MAIN,
} from "../constants/genes/SoilLoam";
import {
  STRIATION_KEYS,
  TAPIR_KEYS,
  TAPIR_STRIATION,
  TAPIR_STRIATION_MAIN,
} from "../constants/genes/TapirStriation";

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
    case "Jaguar":
      return JAGUAR_KEYS.map((key) =>
        makeMapping(key, color, JAGUAR_ROSETTE, JAGUAR_ROSETTE_MAIN),
      );
    case "Rosette":
      return ROSETTE_KEYS.map((key) =>
        makeMapping(key, color, JAGUAR_ROSETTE, JAGUAR_ROSETTE_MAIN),
      );
    case "Pinstripe":
      return PINSTRIPE_KEYS.map((key) =>
        makeMapping(key, color, PINSTRIPE_TRAIL, PINSTRIPE_TRAIL_MAIN),
      );
    case "Trail":
      return TRAIL_KEYS.map((key) =>
        makeMapping(key, color, PINSTRIPE_TRAIL, PINSTRIPE_TRAIL_MAIN),
      );
    case "Ribbon":
      return RIBBON_KEYS.map((key) =>
        makeMapping(key, color, RIBBON_EEL, RIBBON_EEL_MAIN),
      );
    case "Eel":
      return EEL_KEYS.map((key) =>
        makeMapping(key, color, RIBBON_EEL, RIBBON_EEL_MAIN),
      );
    case "Tapir":
      return TAPIR_KEYS.map((key) =>
        makeMapping(key, color, TAPIR_STRIATION, TAPIR_STRIATION_MAIN),
      );
    case "Striation":
      return STRIATION_KEYS.map((key) =>
        makeMapping(key, color, TAPIR_STRIATION, TAPIR_STRIATION_MAIN),
      );
    case "Soil":
      return SOIL_KEYS.map((key) =>
        makeMapping(key, color, SOIL_LOAM, SOIL_LOAM_MAIN),
      );
    case "Loam":
      return LOAM_KEYS.map((key) =>
        makeMapping(key, color, SOIL_LOAM, SOIL_LOAM_MAIN),
      );
    case "Checkers":
      return CHECKERS_KEYS.map((key) =>
        makeMapping(key, color, CHECKERS_CHESS, CHECKERS_CHESS_MAIN),
      );
    case "Chess":
      return CHESS_KEYS.map((key) =>
        makeMapping(key, color, CHECKERS_CHESS, CHECKERS_CHESS_MAIN),
      );
    case "Arapaima":
      return ARAPAIMA_KEYS.map((key) =>
        makeMapping(key, color, ARAPAIMA_AROWANA, ARAPAIMA_AROWANA_MAIN),
      );
    case "Arowana":
      return AROWANA_KEYS.map((key) =>
        makeMapping(key, color, ARAPAIMA_AROWANA, ARAPAIMA_AROWANA_MAIN),
      );
    case "Arc":
      return ARC_KEYS.map((key) =>
        makeMapping(key, color, ARC_LOOP, ARC_LOOP_MAIN),
      );
    case "Loop":
      return LOOP_KEYS.map((key) =>
        makeMapping(key, color, ARC_LOOP, ARC_LOOP_MAIN),
      );
    case "Skink":
      return SKINK_KEYS.map((key) =>
        makeMapping(key, color, SKINK_SPINNER, SKINK_SPINNER_MAIN),
      );
    case "Spinner":
      return SPINNER_KEYS.map((key) =>
        makeMapping(key, color, SKINK_SPINNER, SKINK_SPINNER_MAIN),
      );
    case "Cherub":
      return CHERUB_KEYS.map((key) =>
        makeMapping(key, color, CHERUB_SERAPH, CHERUB_SERAPH_MAIN),
      );
    case "Seraph":
      return SERAPH_KEYS.map((key) =>
        makeMapping(key, color, CHERUB_SERAPH, CHERUB_SERAPH_MAIN),
      );
    case "Poison":
      return POISON_KEYS.map((key) =>
        makeMapping(key, color, POISON_TOXIN, POISON_TOXIN_MAIN),
      );
    case "Toxin":
      return TOXIN_KEYS.map((key) =>
        makeMapping(key, color, POISON_TOXIN, POISON_TOXIN_MAIN),
      );
    case "Slime":
      return SLIME_KEYS.map((key) =>
        makeMapping(key, color, SLIME_SLUDGE, SLIME_SLUDGE_MAIN),
      );
    case "Sludge":
      return SLUDGE_KEYS.map((key) =>
        makeMapping(key, color, SLIME_SLUDGE, SLIME_SLUDGE_MAIN),
      );
    case "Display":
      return DISPLAY_KEYS.map((key) =>
        makeMapping(key, color, DISPLAY_PARADE, DISPLAY_PARADE_MAIN),
      );
    case "Parade":
      return PARADE_KEYS.map((key) =>
        makeMapping(key, color, DISPLAY_PARADE, DISPLAY_PARADE_MAIN),
      );
    case "Clown":
      return CLOWN_KEYS.map((key) =>
        makeMapping(key, color, CLOWN_EYESPOTS, CLOWN_EYESPOTS_MAIN),
      );
    case "Eye Spots":
      return EYESPOTS_KEYS.map((key) =>
        makeMapping(key, color, CLOWN_EYESPOTS, CLOWN_EYESPOTS_MAIN),
      );
    case "Giraffe":
      return GIRAFFE_KEYS.map((key) =>
        makeMapping(key, color, GIRAFFE_HEX, GIRAFFE_HEX_MAIN),
      );
    case "Hex":
      return HEX_KEYS.map((key) =>
        makeMapping(key, color, GIRAFFE_HEX, GIRAFFE_HEX_MAIN),
      );
    case "Python":
      return PYTHON_KEYS.map((key) =>
        makeMapping(key, color, PYTHON_MORPH, PYTHON_MORPH_MAIN),
      );
    case "Morph":
      return MORPH_KEYS.map((key) =>
        makeMapping(key, color, PYTHON_MORPH, PYTHON_MORPH_MAIN),
      );
    case "Mosaic":
      return MOSAIC_KEYS.map((key) =>
        makeMapping(key, color, MOSAIC_BREAKUP, MOSAIC_BREAKUP_MAIN),
      );
    case "Breakup":
      return BREAKUP_KEYS.map((key) =>
        makeMapping(key, color, MOSAIC_BREAKUP, MOSAIC_BREAKUP_MAIN),
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
    case "Trimmings":
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
