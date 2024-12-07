import React from "react";
import "./App.css";
import { COLORS } from "./constants/colors";
import { View, SafeAreaView, Button } from "react-native";

import { SECTION_STYLE } from "./constants/styles";
import { DRAGONS } from "./constants/dragonBreeds";
import Selector, { SwitchSelector } from "./Selector";
import BreedImage from "./BreedImage";

import GeneList from "./GeneList";
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
    <SafeAreaView
      style={[
        {
          backgroundColor: "#fff2e4",
          flexDirection: "row",
          gap: 24,
          padding: 4,
          height: "100%",
          width: "100%",
        },
      ]}
    >
      <View
        style={{
          ...SECTION_STYLE,
          flex: 0.33,
          gap: 4,
          padding: 4,
        }}
      >
        <Selector
          options={DRAGONS}
          onSelect={setBreed}
          value={breed}
          title="Breed"
        />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <SwitchSelector
            value={pose === "Female"}
            title={pose}
            onSelect={() => {
              if (pose === "Female") setPose("Male");
              else setPose("Female");
            }}
            width="50%"
          />
          <SwitchSelector
            value={age === "Adult"}
            title={age}
            onSelect={() => {
              if (age === "Adult") setAge("Hatchling");
              else setAge("Adult");
            }}
            width="50%"
          />
        </View>
        <BreedImage age={age} pose={pose} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Selector
            options={ELEMENTS}
            onSelect={setElement}
            value={element}
            title="Element"
            width="50%"
            flexDirection="column"
          />
          <Selector
            options={EYETYPES}
            onSelect={setEyeType}
            value={eyeType}
            title="Eye Type"
            width="50%"
            flexDirection="column"
          />
        </View>
        <Selector
          options={COLORS}
          onSelect={setPrimary}
          value={primary}
          title="Primary"
        />
        <Selector
          options={COLORS}
          onSelect={setSecondary}
          value={secondary}
          title="Secondary"
        />
        <Selector
          options={COLORS}
          onSelect={setTertiary}
          value={tertiary}
          title="Tertiary"
        />
        <Button
          title="View scry!"
          onPress={() => {
            if (scryLink) window.open(scryLink, "_blank")?.focus();
          }}
          disabled={!scryLink}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: "16px",
          paddingBottom: 8,
          paddingTop: 8,
        }}
      >
        <View style={{ ...SECTION_STYLE }}>
          <GeneList key="primary" category="primary" />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList key="secondary" category="secondary" />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList key="tertiary" category="tertiary" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
