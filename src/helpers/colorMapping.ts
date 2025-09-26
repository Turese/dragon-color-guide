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
import {
  PARADISE,
  PARADISE_KEYS,
  PARADISE_MAIN,
} from "../constants/genes/Paradise";
import { GECKO, GECKO_KEYS, GECKO_MAIN } from "../constants/genes/Gecko";
import { RUNES, RUNES_KEYS, RUNES_MAIN } from "./Runes";
import {
  ECLIPSE,
  ECLIPSE_KEYS,
  ECLIPSE_MAIN,
} from "../constants/genes/Eclipse";
import {
  FLAMEFORGER,
  FLAMEFORGER_KEYS,
  FLAMEFORGER_MAIN,
} from "../constants/genes/Flameforger";
import { SCALES, SCALES_KEYS, SCALES_MAIN } from "../constants/genes/Scales";
import { WISH, WISH_KEYS, WISH_MAIN } from "../constants/genes/Wish";
import { OKAPI, OKAPI_KEYS, OKAPI_MAIN } from "../constants/genes/Okapi";
import { KEEL, KEEL_KEYS, KEEL_MAIN } from "../constants/genes/Keel";
import {
  BLOSSOM,
  BLOSSOM_KEYS,
  BLOSSOM_MAIN,
} from "../constants/genes/Blossom";
import {
  CAPSULE,
  CAPSULE_KEYS,
  CAPSULE_MAIN,
} from "../constants/genes/Capsule";
import {
  GLIMMER,
  GLIMMER_KEYS,
  GLIMMER_MAIN,
} from "../constants/genes/Glimmer";
import {
  CARNIVORE,
  CARNIVORE_KEYS,
  CARNIVORE_MAIN,
} from "../constants/genes/Carnivore";
import { CREST, CREST_KEYS, CREST_MAIN } from "../constants/genes/Crest";
import { BRAIDS, BRAIDS_KEYS, BRAIDS_MAIN } from "../constants/genes/Braids";
import { MEDUSA, MEDUSA_KEYS, MEDUSA_MAIN } from "../constants/genes/Medusa";
import { DECO, DECO_KEYS, DECO_MAIN } from "../constants/genes/Deco";
import {
  SCORPION,
  SCORPION_KEYS,
  SCORPION_MAIN,
} from "../constants/genes/Scorpion";
import {
  MANDIBLES_KEYS,
  MANDIBLES,
  MANDIBLES_MAIN,
} from "../constants/genes/Mandibles";
import {
  SPECTRE,
  SPECTRE_KEYS,
  SPECTRE_MAIN,
} from "../constants/genes/Spectre";
import {
  AUGMENT,
  AUGMENT_KEYS,
  AUGMENT_MAIN,
} from "../constants/genes/Augment";
import {
  MONARCH,
  MONARCH_KEYS,
  MONARCH_MAIN,
} from "../constants/genes/Monarch";
import { GHOST, GHOST_KEYS, GHOST_MAIN } from "../constants/genes/Ghost";
import {
  BRANCHES,
  BRANCHES_KEYS,
  BRANCHES_MAIN,
} from "../constants/genes/Branches";
import {
  NUDIBRANCH,
  NUDIBRANCH_KEYS,
  NUDIBRANCH_MAIN,
} from "../constants/genes/Nudibranch";
import { SHARK, SHARK_KEYS, SHARK_MAIN } from "../constants/genes/Shark";
import {
  STARFALL,
  STARFALL_KEYS,
  STARFALL_MAIN,
} from "../constants/genes/Starfall";
import {
  CRACKLE,
  CRACKLE_KEYS,
  CRACKLE_MAIN,
} from "../constants/genes/Crackle";
import { CORAL, CORAL_KEYS, CORAL_MAIN } from "../constants/genes/Coral";
import {
  ROCKBREAKER,
  ROCKBREAKER_KEYS,
  ROCKBREAKER_MAIN,
} from "../constants/genes/Rockbreaker";
import { THORNS, THORNS_KEYS, THORNS_MAIN } from "../constants/genes/Thorns";
import { SPORES, SPORES_KEYS, SPORES_MAIN } from "../constants/genes/Spores";
import { FANGS, FANGS_KEYS, FANGS_MAIN } from "../constants/genes/Fangs";
import {
  POLYPORE,
  POLYPORE_KEYS,
  POLYPORE_MAIN,
} from "../constants/genes/Polypore";
import { JEWELS, JEWELS_KEYS, JEWELS_MAIN } from "../constants/genes/Jewels";
import {
  FIREBREATHER,
  FIREBREATHER_KEYS,
  FIREBREATHER_MAIN,
} from "../constants/genes/Firebreather";
import { FRILLS, FRILLS_KEYS, FRILLS_MAIN } from "../constants/genes/Frills";
import { CHITIN, CHITIN_KEYS, CHITIN_MAIN } from "../constants/genes/Chitin";

export type PrimaryMapping_t = Record<PrimaryGene_t, string[] | null>;
export type SecondaryMapping_t = Record<SecondaryGene_t, string[] | null>;
export type TertiaryMapping_t = Record<TertiaryGene_t, string[] | null>;

export type GeneColorMapping_t = {
  color: string;
  name: string;
  isPrimary?: boolean;
};

const makeMapping = (
  keys: string[],
  color: Color_t,
  mapping: Record<Color_t, Record<string, string>>,
  primaryMapping: Record<string, true>,
): GeneColorMapping_t[] => {
  return keys.map((key) => ({
    color: mapping[color][key],
    name: key,
    isPrimary: primaryMapping[key],
  }));
};

type GeneInfo_t = {
  keys: string[];
  mapping: Record<Color_t, Record<string, string>>;
  primaryMapping: Record<string, true>;
};

const geneMappings: Partial<Record<Gene_t, GeneInfo_t>> = {
  Arc: { keys: ARC_KEYS, mapping: ARC_LOOP, primaryMapping: ARC_LOOP_MAIN },
  Arapaima: {
    keys: ARAPAIMA_KEYS,
    mapping: ARAPAIMA_AROWANA,
    primaryMapping: ARAPAIMA_AROWANA_MAIN,
  },
  Arowana: {
    keys: AROWANA_KEYS,
    mapping: ARAPAIMA_AROWANA,
    primaryMapping: ARAPAIMA_AROWANA_MAIN,
  },
  Augment: {
    keys: AUGMENT_KEYS,
    mapping: AUGMENT,
    primaryMapping: AUGMENT_MAIN,
  },
  Bar: { keys: BAR_KEYS, mapping: BAR_DAUB, primaryMapping: BAR_DAUB_MAIN },
  Batty: { keys: BATTY_KEYS, mapping: BATTY, primaryMapping: BATTY_MAIN },
  Blaze: {
    keys: BLAZE_KEYS,
    mapping: CINDER_BLAZE,
    primaryMapping: CINDER_BLAZE_MAIN,
  },
  Beard: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Blend: {
    keys: BLEND_KEYS,
    mapping: FADE_BLEND,
    primaryMapping: FADE_BLEND_MAIN,
  },
  Blossom: {
    keys: BLOSSOM_KEYS,
    mapping: BLOSSOM,
    primaryMapping: BLOSSOM_MAIN,
  },
  Boa: { keys: BOA_KEYS, mapping: BOA_SADDLE, primaryMapping: BOA_SADDLE_MAIN },
  Boulder: {
    keys: BOULDER_MYRID_KEYS,
    mapping: BOULDER_MYRID,
    primaryMapping: BOULDER_MYRID_MAIN,
  },
  Braids: { keys: BRAIDS_KEYS, mapping: BRAIDS, primaryMapping: BRAIDS_MAIN },
  Branches: {
    keys: BRANCHES_KEYS,
    mapping: BRANCHES,
    primaryMapping: BRANCHES_MAIN,
  },
  Breakup: {
    keys: BREAKUP_KEYS,
    mapping: MOSAIC_BREAKUP,
    primaryMapping: MOSAIC_BREAKUP_MAIN,
  },
  Capsule: {
    keys: CAPSULE_KEYS,
    mapping: CAPSULE,
    primaryMapping: CAPSULE_MAIN,
  },
  Carnivore: {
    keys: CARNIVORE_KEYS,
    mapping: CARNIVORE,
    primaryMapping: CARNIVORE_MAIN,
  },
  Caterpillar: {
    keys: CATERPILLAR_KEYS,
    mapping: CATERPILLAR_LARVAE,
    primaryMapping: CATERPILLAR_LARVAE_MAIN,
  },
  Checkers: {
    keys: CHECKERS_KEYS,
    mapping: CHECKERS_CHESS,
    primaryMapping: CHECKERS_CHESS_MAIN,
  },
  Cherub: {
    keys: CHERUB_KEYS,
    mapping: CHERUB_SERAPH,
    primaryMapping: CHERUB_SERAPH_MAIN,
  },
  Chess: {
    keys: CHESS_KEYS,
    mapping: CHECKERS_CHESS,
    primaryMapping: CHECKERS_CHESS_MAIN,
  },
  Chitin: {
    keys: CHITIN_KEYS,
    mapping: CHITIN,
    primaryMapping: CHITIN_MAIN,
  },
  Choir: {
    keys: CHOIR_KEYS,
    mapping: CHORUS_CHOIR,
    primaryMapping: CHORUS_CHOIR_MAIN,
  },
  Chorus: {
    keys: CHORUS_KEYS,
    mapping: CHORUS_CHOIR,
    primaryMapping: CHORUS_CHOIR_MAIN,
  },
  Circuit: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Cinder: {
    keys: CINDER_KEYS,
    mapping: CINDER_BLAZE,
    primaryMapping: CINDER_BLAZE_MAIN,
  },
  Clown: {
    keys: CLOWN_KEYS,
    mapping: CLOWN_EYESPOTS,
    primaryMapping: CLOWN_EYESPOTS_MAIN,
  },
  Contour: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Coral: {
    keys: CORAL_KEYS,
    mapping: CORAL,
    primaryMapping: CORAL_MAIN,
  },
  Crackle: {
    keys: CRACKLE_KEYS,
    mapping: CRACKLE,
    primaryMapping: CRACKLE_MAIN,
  },
  Crest: {
    keys: CREST_KEYS,
    mapping: CREST,
    primaryMapping: CREST_MAIN,
  },
  Darts: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Daub: { keys: DAUB_KEYS, mapping: BAR_DAUB, primaryMapping: BAR_DAUB_MAIN },
  Deco: { keys: DECO_KEYS, mapping: DECO, primaryMapping: DECO_MAIN },
  Display: {
    keys: DISPLAY_KEYS,
    mapping: DISPLAY_PARADE,
    primaryMapping: DISPLAY_PARADE_MAIN,
  },
  Eclipse: {
    keys: ECLIPSE_KEYS,
    mapping: ECLIPSE,
    primaryMapping: ECLIPSE_MAIN,
  },
  Eel: { keys: EEL_KEYS, mapping: RIBBON_EEL, primaryMapping: RIBBON_EEL_MAIN },
  "Eye Spots": {
    keys: EYESPOTS_KEYS,
    mapping: CLOWN_EYESPOTS,
    primaryMapping: CLOWN_EYESPOTS_MAIN,
  },
  Fade: {
    keys: FADE_KEYS,
    mapping: FADE_BLEND,
    primaryMapping: FADE_BLEND_MAIN,
  },
  Fangs: {
    keys: FANGS_KEYS,
    mapping: FANGS,
    primaryMapping: FANGS_MAIN,
  },
  Fern: {
    keys: FERN_PAISLEY_KEYS,
    mapping: FERN_PAISLEY,
    primaryMapping: FERN_PAISLEY_MAIN,
  },
  Firebreather: {
    keys: FIREBREATHER_KEYS,
    mapping: FIREBREATHER,
    primaryMapping: FIREBREATHER_MAIN,
  },
  Firefly: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Flair: {
    keys: FLAIR_KEYS,
    mapping: FLAUNT_FLAIR,
    primaryMapping: FLAUNT_FLAIR_MAIN,
  },
  Flameforger: {
    keys: FLAMEFORGER_KEYS,
    mapping: FLAMEFORGER,
    primaryMapping: FLAMEFORGER_MAIN,
  },
  Flaunt: {
    keys: FLAUNT_KEYS,
    mapping: FLAUNT_FLAIR,
    primaryMapping: FLAUNT_FLAIR_MAIN,
  },
  Frills: {
    keys: FRILLS_KEYS,
    mapping: FRILLS,
    primaryMapping: FRILLS_MAIN,
  },
  Gecko: { keys: GECKO_KEYS, mapping: GECKO, primaryMapping: GECKO_MAIN },
  Ghost: {
    keys: GHOST_KEYS,
    mapping: GHOST,
    primaryMapping: GHOST_MAIN,
  },
  Giraffe: {
    keys: GIRAFFE_KEYS,
    mapping: GIRAFFE_HEX,
    primaryMapping: GIRAFFE_HEX_MAIN,
  },
  Glimmer: {
    keys: GLIMMER_KEYS,
    mapping: GLIMMER,
    primaryMapping: GLIMMER_MAIN,
  },
  Harlequin: {
    keys: HARLEQUIN_KEYS,
    mapping: HARLEQUIN_JESTER,
    primaryMapping: HARLEQUIN_JESTER_MAIN,
  },
  Hex: {
    keys: HEX_KEYS,
    mapping: GIRAFFE_HEX,
    primaryMapping: GIRAFFE_HEX_MAIN,
  },
  Jaguar: {
    keys: JAGUAR_KEYS,
    mapping: JAGUAR_ROSETTE,
    primaryMapping: JAGUAR_ROSETTE_MAIN,
  },
  Jester: {
    keys: JESTER_KEYS,
    mapping: HARLEQUIN_JESTER,
    primaryMapping: HARLEQUIN_JESTER_MAIN,
  },
  Jewels: {
    keys: JEWELS_KEYS,
    mapping: JEWELS,
    primaryMapping: JEWELS_MAIN,
  },
  Keel: {
    keys: KEEL_KEYS,
    mapping: KEEL,
    primaryMapping: KEEL_MAIN,
  },
  Kumo: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Lace: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Larvae: {
    keys: LARVAE_KEYS,
    mapping: CATERPILLAR_LARVAE,
    primaryMapping: CATERPILLAR_LARVAE_MAIN,
  },
  Loam: { keys: LOAM_KEYS, mapping: SOIL_LOAM, primaryMapping: SOIL_LOAM_MAIN },
  Loop: { keys: LOOP_KEYS, mapping: ARC_LOOP, primaryMapping: ARC_LOOP_MAIN },
  Mandibles: {
    keys: MANDIBLES_KEYS,
    mapping: MANDIBLES,
    primaryMapping: MANDIBLES_MAIN,
  },
  Medusa: {
    keys: MEDUSA_KEYS,
    mapping: MEDUSA,
    primaryMapping: MEDUSA_MAIN,
  },
  Monarch: {
    keys: MONARCH_KEYS,
    mapping: MONARCH,
    primaryMapping: MONARCH_MAIN,
  },
  Morph: {
    keys: MORPH_KEYS,
    mapping: PYTHON_MORPH,
    primaryMapping: PYTHON_MORPH_MAIN,
  },
  Mosaic: {
    keys: MOSAIC_KEYS,
    mapping: MOSAIC_BREAKUP,
    primaryMapping: MOSAIC_BREAKUP_MAIN,
  },
  Myrid: {
    keys: BOULDER_MYRID_KEYS,
    mapping: BOULDER_MYRID,
    primaryMapping: BOULDER_MYRID_MAIN,
  },
  Nudibranch: {
    keys: NUDIBRANCH_KEYS,
    mapping: NUDIBRANCH,
    primaryMapping: NUDIBRANCH_MAIN,
  },
  Okapi: {
    keys: OKAPI_KEYS,
    mapping: OKAPI,
    primaryMapping: OKAPI_MAIN,
  },
  Paisley: {
    keys: FERN_PAISLEY_KEYS,
    mapping: FERN_PAISLEY,
    primaryMapping: FERN_PAISLEY_MAIN,
  },
  Paradise: {
    keys: PARADISE_KEYS,
    mapping: PARADISE,
    primaryMapping: PARADISE_MAIN,
  },
  Parade: {
    keys: PARADE_KEYS,
    mapping: DISPLAY_PARADE,
    primaryMapping: DISPLAY_PARADE_MAIN,
  },
  Peacock: {
    keys: PEACOCK_KEYS,
    mapping: PEACOCK,
    primaryMapping: PEACOCK_MAIN,
  },
  Pinstripe: {
    keys: PINSTRIPE_KEYS,
    mapping: PINSTRIPE_TRAIL,
    primaryMapping: PINSTRIPE_TRAIL_MAIN,
  },
  Points: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Polkadot: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Polypore: {
    keys: POLYPORE_KEYS,
    mapping: POLYPORE,
    primaryMapping: POLYPORE_MAIN,
  },
  Poison: {
    keys: POISON_KEYS,
    mapping: POISON_TOXIN,
    primaryMapping: POISON_TOXIN_MAIN,
  },
  Python: {
    keys: PYTHON_KEYS,
    mapping: PYTHON_MORPH,
    primaryMapping: PYTHON_MORPH_MAIN,
  },
  Ribbon: {
    keys: RIBBON_KEYS,
    mapping: RIBBON_EEL,
    primaryMapping: RIBBON_EEL_MAIN,
  },
  Rockbreaker: {
    keys: ROCKBREAKER_KEYS,
    mapping: ROCKBREAKER,
    primaryMapping: ROCKBREAKER_MAIN,
  },
  Rosette: {
    keys: ROSETTE_KEYS,
    mapping: JAGUAR_ROSETTE,
    primaryMapping: JAGUAR_ROSETTE_MAIN,
  },
  Runes: { keys: RUNES_KEYS, mapping: RUNES, primaryMapping: RUNES_MAIN },
  Saddle: {
    keys: SADDLE_KEYS,
    mapping: BOA_SADDLE,
    primaryMapping: BOA_SADDLE_MAIN,
  },
  Scales: { keys: SCALES_KEYS, mapping: SCALES, primaryMapping: SCALES_MAIN },
  Scorpion: {
    keys: SCORPION_KEYS,
    mapping: SCORPION,
    primaryMapping: SCORPION_MAIN,
  },
  Seraph: {
    keys: SERAPH_KEYS,
    mapping: CHERUB_SERAPH,
    primaryMapping: CHERUB_SERAPH_MAIN,
  },
  Shark: {
    keys: SHARK_KEYS,
    mapping: SHARK,
    primaryMapping: SHARK_MAIN,
  },
  Skeletal: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Skink: {
    keys: SKINK_KEYS,
    mapping: SKINK_SPINNER,
    primaryMapping: SKINK_SPINNER_MAIN,
  },
  Slime: {
    keys: SLIME_KEYS,
    mapping: SLIME_SLUDGE,
    primaryMapping: SLIME_SLUDGE_MAIN,
  },
  Sludge: {
    keys: SLUDGE_KEYS,
    mapping: SLIME_SLUDGE,
    primaryMapping: SLIME_SLUDGE_MAIN,
  },
  Smirch: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Smoke: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Soil: { keys: SOIL_KEYS, mapping: SOIL_LOAM, primaryMapping: SOIL_LOAM_MAIN },
  Spectre: {
    keys: SPECTRE_KEYS,
    mapping: SPECTRE,
    primaryMapping: SPECTRE_MAIN,
  },
  Spinner: {
    keys: SPINNER_KEYS,
    mapping: SKINK_SPINNER,
    primaryMapping: SKINK_SPINNER_MAIN,
  },
  Spores: {
    keys: SPORES_KEYS,
    mapping: SPORES,
    primaryMapping: SPORES_MAIN,
  },
  Starfall: {
    keys: STARFALL_KEYS,
    mapping: STARFALL,
    primaryMapping: STARFALL_MAIN,
  },
  Striation: {
    keys: STRIATION_KEYS,
    mapping: TAPIR_STRIATION,
    primaryMapping: TAPIR_STRIATION_MAIN,
  },
  Tapir: {
    keys: TAPIR_KEYS,
    mapping: TAPIR_STRIATION,
    primaryMapping: TAPIR_STRIATION_MAIN,
  },
  Thorns: {
    keys: THORNS_KEYS,
    mapping: THORNS,
    primaryMapping: THORNS_MAIN,
  },
  Toxin: {
    keys: TOXIN_KEYS,
    mapping: POISON_TOXIN,
    primaryMapping: POISON_TOXIN_MAIN,
  },
  Trail: {
    keys: TRAIL_KEYS,
    mapping: PINSTRIPE_TRAIL,
    primaryMapping: PINSTRIPE_TRAIL_MAIN,
  },
  Trimmings: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Underbelly: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Weathered: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Wintercoat: {
    keys: MONOCOLOR_TERTS_KEY,
    mapping: MONOCOLOR_TERTS,
    primaryMapping: MONOCOLOR_TERTS_MAIN,
  },
  Wish: { keys: WISH_KEYS, mapping: WISH, primaryMapping: WISH_MAIN },
};

export function getGeneColorList(
  color: Color_t,
  gene: Gene_t,
  category: GeneCategory_t,
): Array<GeneColorMapping_t> {
  if (gene === "Basic") {
    if (category === "primary")
      return makeMapping(BASIC_PRIMARY_KEYS, color, BASIC, BASIC_MAIN);
    else if (category === "secondary")
      return makeMapping(BASIC_SECONDARY_KEYS, color, BASIC, BASIC_MAIN);
    else return []; // basic tertiary always does nothing
  }
  const data = geneMappings[gene];
  if (!data) return [];
  const { keys, mapping, primaryMapping } = data;
  return makeMapping(keys, color, mapping, primaryMapping);
}
