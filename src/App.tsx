import React from "react";
import "./App.css";
import { Color_t, COLORS } from "./constants/colors";
import { View, SafeAreaView, Button } from "react-native";

import { SECTION_STYLE } from "./constants/styles";
import { Dragon_t, DRAGONS } from "./constants/dragonBreeds";
import Selector from "./Selector";
import BreedImage from "./BreedImage";
import {
  PrimaryGene_t,
  SecondaryGene_t,
  TertiaryGene_t,
} from "./constants/genes";
import GeneList from "./GeneList";
import { generateScryLink } from "./helpers/scryLink";
import {
  Age_t,
  Element_t,
  EyeType_t,
  Pose_t,
  POSES,
} from "./constants/posesElements";

function App() {
  const [breed, setBreed] = React.useState<Dragon_t | null>(null);

  const [primary, setPrimary] = React.useState<Color_t>("Maize");
  const [secondary, setSecondary] = React.useState<Color_t>("Maize");
  const [tertiary, setTertiary] = React.useState<Color_t>("Maize");

  const [primaryGene, setPrimaryGene] = React.useState<PrimaryGene_t>("Basic");
  const [secondaryGene, setSecondaryGene] =
    React.useState<SecondaryGene_t>("Basic");

  const [tertiaryGene, setTertiaryGene] =
    React.useState<TertiaryGene_t>("Basic");

  const [pose, setPose] = React.useState<Pose_t>("Female");

  const [age, setAge] = React.useState<Age_t>("Adult");

  const [element, setElement] = React.useState<Element_t>("Wind");

  const [eyeType, setEyeType] = React.useState<EyeType_t>("Common");

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
          gap: "4px",
          padding: 4,
        }}
      >
        <Selector
          options={DRAGONS}
          onSelect={setBreed}
          value={breed}
          title="Breed"
        />
        <Selector
          options={POSES}
          onSelect={setPose}
          value={pose}
          title="Pose"
        />
        <BreedImage dragon={breed} age={age} pose={pose} />
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
          <GeneList
            key={primary}
            category="primary"
            breed={breed}
            color={primary}
            selected={primaryGene}
            onSelect={setPrimaryGene}
          />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList
            key={secondary}
            category="secondary"
            breed={breed}
            color={secondary}
            selected={secondaryGene}
            onSelect={setSecondaryGene}
          />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList
            key={tertiary}
            category="tertiary"
            breed={breed}
            color={tertiary}
            selected={tertiaryGene}
            onSelect={setTertiaryGene}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
