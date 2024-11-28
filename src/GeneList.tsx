import { View } from "react-native";

import { Gene_t, GeneCategory_t } from "./constants/genes";
import { Dragon_t } from "./constants/dragonBreeds";
import { Color_t } from "./constants/colors";

interface GeneListProps {
  color: Color_t;
  category: GeneCategory_t;
  breed?: Dragon_t;
  selected?: Gene_t;
}

function BreedImage(_props: GeneListProps) {
  //const { color, category, breed, selected } = props;

  return <View></View>;
}

export default BreedImage;
