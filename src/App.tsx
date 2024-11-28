import React from "react";
import "./App.css";
import { COLORS } from "./constants/colors";
import { View, SafeAreaView } from "react-native";

import { SECTION_STYLE } from "./constants/styles";
import { Dragon_t, DRAGONS } from "./constants/dragonBreeds";
import Selector from "./Selector";
import BreedImage from "./BreedImage";

function App() {
  const [currentBreed, setCurrentBreed] = React.useState<string | null>(null);

  const [primary, setPrimary] = React.useState<string>("Maize");
  const [secondary, setSecondary] = React.useState<string>("Maize");
  const [tertiary, setTertiary] = React.useState<string>("Maize");

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: "#fff2e4",
          flexDirection: "row",
          gap: 24,
          height: "100%",
          padding: 4,
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
        <BreedImage dragon={currentBreed as Dragon_t} />
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
        <View style={{ ...SECTION_STYLE }}></View>
        <View style={{ ...SECTION_STYLE }}></View>
        <View style={{ ...SECTION_STYLE }}></View>
      </View>
    </SafeAreaView>
  );
}

export default App;
