import { COLOR_IDS, Color_t } from "../constants/colors";
import { DRAGON_IDS, Dragon_t, GENE_MAPPINGS } from "../constants/dragonBreeds";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "../constants/genes";
import {
  AGE_IDS,
  Age_t,
  AGES,
  ELEMENT_IDS,
  Element_t,
  ELEMENTS,
  EYETYPE_IDS,
  EyeType_t,
  EYETYPES,
  POSE_IDS,
  Pose_t,
  POSES,
} from "../constants/posesElements";
import { DRAGONS } from "../constants/dragonBreeds";
import { COLORS } from "../constants/colors";
import {
  PRIMARY_GENES,
  SECONDARY_GENES,
  TERTIARY_GENES,
} from "../constants/genes";

const BASE_URL = "https://www1.flightrising.com/scrying/predict";

export interface ParameterProps_i {
  primary: Color_t;
  secondary: Color_t;
  tertiary: Color_t;
  primaryGene: PrimaryGene_t;
  secondaryGene: SecondaryGene_t;
  tertiaryGene: TertiaryGene_t;
  breed: Dragon_t;
  pose: Pose_t;
  eyeType: EyeType_t;
  element: Element_t;
  age: Age_t;
}

export function generateColorGuideParameters(
  props: ParameterProps_i,
): URLSearchParams {
  const params = new URLSearchParams();

  params.set("breed", props.breed.toLowerCase());
  params.set("pose", props.pose.toLowerCase());
  params.set("age", props.age.toLowerCase());
  params.set("eye_type", props.eyeType.toLowerCase());
  params.set("element", props.element.toLowerCase());
  params.set("primary", props.primary.toLowerCase());
  params.set("primary_gene", props.primaryGene.toLowerCase());
  params.set("secondary", props.secondary.toLowerCase());
  params.set("secondary_gene", props.secondaryGene.toLowerCase());
  params.set("tertiary", props.tertiary.toLowerCase());
  params.set("tertiary_gene", props.tertiaryGene.toLowerCase());
  return params;
}

export function readColorGuideParameters(
  params: URLSearchParams,
): Partial<ParameterProps_i> {
  let breed,
    pose,
    age,
    eyeType,
    element,
    primary,
    primaryGene,
    secondary,
    secondaryGene,
    tertiary,
    tertiaryGene;

  // checks if this parameter is valid for its type
  const findMatch = <T extends string>(
    list: T[],
    value: string | null,
  ): T | undefined => {
    if (!value) return undefined;
    const v = value.toLowerCase().trim();
    return list.find((entry) => entry.toLowerCase() === v);
  };

  const _breed = params.get("breed");
  if (_breed) {
    const match = findMatch(DRAGONS, _breed);
    if (match) breed = match as Dragon_t;
  }

  const _pose = params.get("pose");
  if (_pose) {
    const match = findMatch(POSES, _pose);
    if (match) pose = match as Pose_t;
  }

  const _age = params.get("age");
  if (_age) {
    const match = findMatch(AGES, _age);
    if (match) age = match as Age_t;
  }

  const _eye = params.get("eye_type") || params.get("eyetype");
  if (_eye) {
    const match = findMatch(EYETYPES, _eye);
    if (match) eyeType = match as EyeType_t;
  }

  const _element = params.get("element");
  if (_element) {
    const match = findMatch(ELEMENTS, _element);
    if (match) element = match as Element_t;
  }

  const _primary = params.get("primary");
  if (_primary) {
    const match = findMatch(COLORS, _primary);
    if (match) primary = match as Color_t;
  }

  const _primaryGene = params.get("primary_gene");
  if (_primaryGene) {
    const match = findMatch(PRIMARY_GENES, _primaryGene);
    if (match) primaryGene = match as PrimaryGene_t;
  }

  const _secondary = params.get("secondary");
  if (_secondary) {
    const match = findMatch(COLORS, _secondary);
    if (match) secondary = match as Color_t;
  }

  const _secondaryGene = params.get("secondary_gene");
  if (_secondaryGene) {
    const match = findMatch(
      SECONDARY_GENES as SecondaryGene_t[],
      _secondaryGene,
    );
    if (match) secondaryGene = match as SecondaryGene_t;
  }

  const _tertiary = params.get("tertiary");
  if (_tertiary) {
    const match = findMatch(COLORS, _tertiary);
    if (match) tertiary = match as Color_t;
  }

  const _tertiaryGene = params.get("tertiary_gene");
  if (_tertiaryGene) {
    const match = findMatch(TERTIARY_GENES, _tertiaryGene);
    if (match) tertiaryGene = match as TertiaryGene_t;
  }

  return {
    breed,
    pose,
    age,
    eyeType,
    element,
    primary,
    primaryGene,
    secondary,
    secondaryGene,
    tertiary,
    tertiaryGene,
  };
}

export function generateScryLink(props: ParameterProps_i): string {
  const {
    breed,
    primary,
    secondary,
    tertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    pose,
    eyeType,
    element,
    age,
  } = props;

  const params = new URLSearchParams();

  params.set("breed", DRAGON_IDS[breed].toString());

  const breedMappings = GENE_MAPPINGS[breed];
  const breedPrimary = breedMappings.primary[primaryGene];
  const breedSecondary = breedMappings.secondary[secondaryGene];
  const breedTertiary = breedMappings.tertiary[tertiaryGene];

  params.set("gender", `${POSE_IDS[pose]}`);
  params.set("age", `${AGE_IDS[age]}`);

  params.set("bodygene", `${breedPrimary}`);
  params.set("body", `${COLOR_IDS[primary]}`);

  params.set("winggene", `${breedSecondary}`);
  params.set("wings", `${COLOR_IDS[secondary]}`);

  params.set("tertgene", `${breedTertiary}`);
  params.set("tert", `${COLOR_IDS[tertiary]}`);
  params.set("element", `${ELEMENT_IDS[element]}`);
  params.set("eyetype", `${EYETYPE_IDS[eyeType]}`);

  return BASE_URL + "?" + params.toString();
}
