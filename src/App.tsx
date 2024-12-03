import React from "react";
import "./App.css";
import { Color_t, COLORS } from "./constants/colors";
import { View, SafeAreaView } from "react-native";

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

function App() {
  const [currentBreed, setCurrentBreed] = React.useState<Dragon_t | null>(null);

  const [primary, setPrimary] = React.useState<Color_t>("Maize");
  const [secondary, setSecondary] = React.useState<Color_t>("Maize");
  const [tertiary, setTertiary] = React.useState<Color_t>("Maize");

  const [primaryGene, setPrimaryGene] = React.useState<PrimaryGene_t>("Basic");
  const [secondaryGene, setSecondaryGene] =
    React.useState<SecondaryGene_t>("Basic");

  const [tertiaryGene, setTertiaryGene] =
    React.useState<TertiaryGene_t>("Basic");

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
          onSelect={setCurrentBreed}
          value={currentBreed}
          title="Breed"
        />
        <BreedImage dragon={currentBreed} />
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
            breed={currentBreed}
            color={primary}
            selected={primaryGene}
            onSelect={setPrimaryGene}
          />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList
            key={secondary}
            category="secondary"
            breed={currentBreed}
            color={secondary}
            selected={secondaryGene}
            onSelect={setSecondaryGene}
          />
        </View>
        <View style={{ ...SECTION_STYLE }}>
          <GeneList
            key={tertiary}
            category="tertiary"
            breed={currentBreed}
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
