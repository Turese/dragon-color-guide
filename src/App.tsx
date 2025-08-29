import React from "react";
import { Color_t, COLORS } from "./constants/colors";

import { dragonHasGene, DRAGONS } from "./constants/dragonBreeds";
import Selector from "./Selector";
import BreedImage from "./BreedImage";

import GeneList, { LefthandGeneView } from "./GeneList";
import { generateScryLink } from "./helpers/scryLink";
import {
  Age_t,
  Element_t,
  ELEMENTS,
  EyeType_t,
  EYETYPES,
  Pose_t,
} from "./constants/posesElements";
import { useDragonCtx } from "./dragonCtx";
import { BASIC } from "./constants/genes/Basic";
import { getGeneColorList } from "./helpers/colorMapping";
import { Button, Flex } from "@mantine/core";
import { SECTION_STYLE } from "./constants/styles";

function App() {
  const [pose, setPose] = React.useState<Pose_t>("Female");

  const [age, setAge] = React.useState<Age_t>("Adult");

  const [element, setElement] = React.useState<Element_t>("Wind");

  const [eyeType, setEyeType] = React.useState<EyeType_t>("Common");

  const {
    primary,
    setPrimary,
    secondary,
    setSecondary,
    tertiary,
    setTertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    breed,
    setBreed,
  } = useDragonCtx();

  const scryLink = generateScryLink({
    primary,
    secondary,
    tertiary,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    breed,
    pose,
    age,
    element,
    eyeType,
  });

  return (
    <Flex
      direction="row"
      style={{
        gap: 24,
        padding: 4,
        height: "100%",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Flex
        style={{
          overflowY: "scroll",
          flexDirection: "column",
          padding: 4,
          flex: 0.33,
        }}
      >
        <Selector
          options={DRAGONS}
          onSelect={setBreed}
          value={breed}
          title="Breed"
          search
        />
        <Selector
          options={["Female", "Male", "Hatchling"]}
          onSelect={(option) => {
            if (option === "Female" || option === "Male") {
              setPose(option);
              setAge("Adult");
            } else if (option === "Hatchling") {
              setAge("Hatchling");
            }
          }}
          value={age === "Hatchling" ? "Hatchling" : pose}
          title="Pose"
        />
        <BreedImage age={age} pose={pose} />
        <Flex
          direction="row"
          style={{ width: "100%", justify: "space-between" }}
        >
          <Selector
            options={ELEMENTS}
            onSelect={setElement}
            value={element}
            title="Element"
            flexDirection="column"
            search
          />
          <Selector
            options={EYETYPES}
            onSelect={setEyeType}
            value={eyeType}
            title="Eye Type"
            flexDirection="column"
            search
          />
        </Flex>
        <Selector
          options={COLORS}
          onSelect={setPrimary}
          value={primary}
          title="Primary"
          getColor={(color: Color_t) => BASIC[color]["Main"]}
          search
        />
        <LefthandGeneView
          gene={primaryGene}
          palette={getGeneColorList(primary, primaryGene, "primary")}
          isAvailable={dragonHasGene(breed, "primary", primaryGene)}
        />
        <Selector
          options={COLORS}
          onSelect={setSecondary}
          value={secondary}
          title="Secondary"
          getColor={(color: Color_t) => BASIC[color]["Main"]}
          search
        />
        <LefthandGeneView
          gene={secondaryGene}
          palette={getGeneColorList(secondary, secondaryGene, "secondary")}
          isAvailable={dragonHasGene(breed, "secondary", secondaryGene)}
        />
        <Selector
          options={COLORS}
          onSelect={setTertiary}
          value={tertiary}
          title="Tertiary"
          getColor={(color: Color_t) => BASIC[color]["Main"]}
          search
        />
        <LefthandGeneView
          gene={tertiaryGene}
          palette={getGeneColorList(tertiary, tertiaryGene, "tertiary")}
          isAvailable={dragonHasGene(breed, "tertiary", tertiaryGene)}
        />
        <Button
          variant="outline"
          fullWidth
          onClick={() => {
            if (scryLink) window.open(scryLink, "_blank")?.focus();
          }}
          disabled={!scryLink}
        >
          View scry
        </Button>
      </Flex>
      <Flex
        style={{
          flex: 1,
          overflowY: "scroll",
          gap: "16px",
        }}
      >
        <Flex style={SECTION_STYLE}>
          <GeneList key="primary" category="primary" />
        </Flex>
        <Flex style={SECTION_STYLE}>
          <GeneList key="secondary" category="secondary" />
        </Flex>
        <Flex style={SECTION_STYLE}>
          <GeneList key="tertiary" category="tertiary" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
