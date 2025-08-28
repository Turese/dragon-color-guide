import { AspectRatio } from "@mantine/core";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import { Age_t, Pose_t } from "./constants/posesElements";
import { useDragonCtx } from "./dragonCtx";

interface BreedImageProps_i {
  pose: Pose_t;
  age: Age_t;
  primaryGene?: PrimaryGene_t;
  secondaryGene?: SecondaryGene_t;
  tertiaryGene?: TertiaryGene_t;
}

function BreedImage(props: BreedImageProps_i) {
  const { breed } = useDragonCtx();
  const { pose, age } = props;
  const poseId = age === "Hatchling" ? "h" : pose === "Female" ? "f" : "m";
  const dragonId = breed?.toLowerCase();

  return (
    <AspectRatio ratio={1 / 1} maw={300} mx="auto">
      {breed && (
        <img
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          src={require(`./images/bases/${dragonId}-${poseId}.png`)}
          style={{ height: "auto", width: "100%" }}
        />
      )}
    </AspectRatio>
  );
}

export default BreedImage;
