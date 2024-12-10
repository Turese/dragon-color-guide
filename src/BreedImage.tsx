import { Image, View } from "react-native";

import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Age_t, Pose_t } from "./constants/posesElements";
import { useDragonCtx } from "./dragonCtx";

interface BreedImageProps {
  pose: Pose_t;
  age: Age_t;
  primaryGene?: PrimaryGene_t;
  secondaryGene?: SecondaryGene_t;
  tertiaryGene?: TertiaryGene_t;
}

function BreedImage(props: BreedImageProps) {
  const { breed } = useDragonCtx();
  const { pose, age } = props;
  const poseId = age === "Hatchling" ? "h" : pose === "Female" ? "f" : "m";
  const dragonId = breed?.toLowerCase();

  return (
    <View style={{ height: "33%", width: "100%" }}>
      {breed && (
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
