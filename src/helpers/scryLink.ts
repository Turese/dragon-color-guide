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
  ELEMENT_IDS,
  Element_t,
  EYETYPE_IDS,
  EyeType_t,
  POSE_IDS,
  Pose_t,
} from "../constants/posesElements";

const BASE_URL = "https://www1.flightrising.com/scrying/predict?";

//todo: element, gender, eyetype
export function generateScryLink(props: {
  primary: Color_t;
  secondary: Color_t;
  tertiary: Color_t;
  primaryGene: PrimaryGene_t;
  secondaryGene: SecondaryGene_t;
  tertiaryGene: TertiaryGene_t;
  breed: Dragon_t | null;
  pose: Pose_t;
  eyeType: EyeType_t;
  element: Element_t;
  age: Age_t;
}): string | null {
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

  let url = BASE_URL;

  if (breed) {
    url += `breed=${DRAGON_IDS[breed]}`;
    const breedMappings = GENE_MAPPINGS[breed];
    const breedPrimary = breedMappings.primary[primaryGene];
    const breedSecondary = breedMappings.secondary[secondaryGene];
    const breedTertiary = breedMappings.tertiary[tertiaryGene];

    if (
      typeof breedPrimary !== "number" ||
      typeof breedSecondary !== "number" ||
      typeof breedTertiary !== "number"
    ) {
      return null;
    }
    url += `&gender=${POSE_IDS[pose]}`;
    url += `&age=${AGE_IDS[age]}`;

    url += `&bodygene=${breedPrimary}`;
    url += `&body=${COLOR_IDS[primary]}`;

    url += `&winggene=${breedSecondary}`;
    url += `&wings=${COLOR_IDS[secondary]}`;

    url += `&tertgene=${breedTertiary}`;
    url += `&tert=${COLOR_IDS[tertiary]}`;
    url += `&element=${ELEMENT_IDS[element]}`;
    url += `&eyetype=${EYETYPE_IDS[eyeType]}`;
  } else {
    return null;
  }

  return url;
}
