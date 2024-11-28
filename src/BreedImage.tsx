import { Image, View } from "react-native";

import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Dragon_t } from "./constants/dragonBreeds";

interface BreedImageProps {
  dragon: Dragon_t | null;
  primaryGene?: PrimaryGene_t;
  secondaryGene?: SecondaryGene_t;
  tertiaryGene?: TertiaryGene_t;
}

function BreedImage(props: BreedImageProps) {
  const { dragon } = props; //todo: have an image for each breed

  return (
    <View style={{ height: "50%", width: "100%" }}>
      {dragon && (
        <Image
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require(`./images/bases/guardian.png`)}
          style={{ height: "100%", resizeMode: "contain", width: "100%" }}
        />
      )}
    </View>
  );
}

export default BreedImage;
