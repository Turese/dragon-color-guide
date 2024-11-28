import { COLOR_IDS, Color_t } from "../constants/colors";
import { DRAGON_IDS, Dragon_t, GENE_MAPPINGS } from "../constants/dragonBreeds";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "../constants/genes";

const BASE_URL = "https://www1.flightrising.com/scrying/predict?";

//todo: element, gender, eyetype
export function generateScryLink(props: {
  primary: Color_t;
  secondary: Color_t;
  tertiary: Color_t;
  primaryGene: PrimaryGene_t;
  secondaryGene: SecondaryGene_t;
  tertiaryGene: TertiaryGene_t;
  breed?: Dragon_t;
}): string | null {
  const {
    breed,
    primary,
    secondary,
    tertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
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
    url += `&bodygene=${breedPrimary}`;
    url += `&body=${COLOR_IDS[primary]}`;

    url += `&winggene=${breedSecondary}`;
    url += `&wings=${COLOR_IDS[secondary]}`;

    url += `&tertgene=${breedTertiary}`;
    url += `&tert=${COLOR_IDS[tertiary]}`;
  }

  return url;
}
