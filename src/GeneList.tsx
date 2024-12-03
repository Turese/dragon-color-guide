import React from "react";

import { View, Text, FlatList, Pressable } from "react-native";

import {
  Gene_t,
  GeneCategory_t,
  PRIMARY_GENES,
  SECONDARY_GENES,
  TERTIARY_GENES,
} from "./constants/genes";
import { Dragon_t, dragonHasGene } from "./constants/dragonBreeds";
import { Color_t } from "./constants/colors";
import {
  SELECTABLE_GENE_ITEM_STYLE,
  SELECTED_GENE_ITEM_STYLE,
} from "./constants/styles";

interface GeneListProps<T extends Gene_t> {
  color: Color_t;
  category: GeneCategory_t;
  breed: Dragon_t | null;
  selected: T;
  onSelect: (gene: T) => void;
  colorMapping: Record<T, string[] | null>;
}

function GeneList<T extends Gene_t>(props: GeneListProps<T>) {
  const { category, breed, selected, onSelect, colorMapping } = props;

  const geneList = React.useMemo(() => {
    let baseList: Array<T>;
    if (category === "primary") {
      baseList = PRIMARY_GENES as Array<T>;
    } else if (category === "secondary") {
      baseList = SECONDARY_GENES as Array<T>;
    } else {
      baseList = TERTIARY_GENES as Array<T>;
    }
    return baseList.map<GeneItemConfig>((gene) => ({
      gene,
      isAvailable: !!breed && dragonHasGene(breed, category, gene),
      isSelected: selected === gene,
      onPress: () => onSelect(gene),
      palette: colorMapping[gene] || [], // todo: find palette for each color -> gene combination
    }));
  }, [breed, category, selected]);

  return (
    <View style={{ padding: 4, width: "100%" }}>
      <FlatList
        data={geneList}
        renderItem={(renderProps: { item: GeneItemConfig }) => (
          <GeneItem
            gene={renderProps.item.gene as string}
            isAvailable={renderProps.item.isAvailable}
            isSelected={renderProps.item.isSelected}
            palette={renderProps.item.palette}
            onPress={renderProps.item.onPress}
          />
        )}
        keyExtractor={(item: GeneItemConfig) => `${item.gene}-${category}`}
      />
    </View>
  );
}

interface GeneItemConfig {
  gene: string;
  isAvailable: boolean;
  isSelected: boolean;
  palette: string[];
  onPress: () => void;
}

const GeneItem = ({
  gene,
  isAvailable,
  isSelected,
  palette,
  onPress,
}: GeneItemConfig) => (
  <Pressable
    style={{
      ...SELECTABLE_GENE_ITEM_STYLE,
      opacity: isAvailable ? 1 : 0.5,
      ...(isSelected ? SELECTED_GENE_ITEM_STYLE : null),
    }}
    onPress={onPress}
  >
    <Text
      style={{
        fontWeight: isSelected ? "bold" : undefined,
      }}
    >
      {gene}
    </Text>
    <View style={{ flexDirection: "row", marginLeft: "auto" }}>
      {palette.map((color) => (
        <Swatch color={color} tooltip={color} />
      ))}
    </View>
  </Pressable>
);

interface SwatchConfig {
  color: string;
  tooltip: string;
  isPrimary?: boolean;
}

const Swatch = ({ color, tooltip, isPrimary }: SwatchConfig) => (
  <View
    style={{
      backgroundColor: color,
      borderWidth: 1,
      margin: isPrimary ? 1 : 6, // extra margin aims to make secondary colors take up the same amount of space
      height: isPrimary ? 20 : 10,
      width: isPrimary ? 20 : 10,
    }}
  />
);

export default GeneList;
