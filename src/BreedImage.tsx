import { Image, View } from "react-native";

import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Dragon_t } from "./constants/dragonBreeds";
import { Age_t, Pose_t } from "./constants/posesElements";

interface BreedImageProps {
  dragon: Dragon_t | null;
  pose: Pose_t;
  age: Age_t;
  primaryGene?: PrimaryGene_t;
  secondaryGene?: SecondaryGene_t;
  tertiaryGene?: TertiaryGene_t;
}

function BreedImage(props: BreedImageProps) {
  const { dragon, pose, age } = props; //todo: have an image for each breed
  const poseId = age === "Hatchling" ? "h" : pose === "Female" ? "f" : "m";
  const dragonId = dragon?.toLowerCase();

  return (
    <View style={{ height: "50%", width: "100%" }}>
      {dragon && (
        <Image
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require(`./images/bases/${dragonId}-${poseId}.png`)}
          style={{ height: "100%", resizeMode: "contain", width: "100%" }}
        />
      )}
    </View>
  );
}

export default BreedImage;
