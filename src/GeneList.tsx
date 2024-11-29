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
  UNSELECTABLE_GENE_ITEM_STYLE,
} from "./constants/styles";

interface GeneListProps<T> {
  color: Color_t;
  category: GeneCategory_t;
  breed: Dragon_t | null;
  selected: T;
  onSelect: (gene: T) => void;
}

function GeneList<T extends Gene_t>(props: GeneListProps<T>) {
  const { category, breed, selected, onSelect } = props;

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
      palette: ["#ffffff", "#ffffff", "#ffffff"], // todo: find palette for each color -> gene combination
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

function GeneItem({
  gene,
  isAvailable,
  isSelected,
  palette,
  onPress,
}: GeneItemConfig) {
  return (
    <Pressable
      style={
        isSelected
          ? SELECTED_GENE_ITEM_STYLE
          : isAvailable
            ? SELECTABLE_GENE_ITEM_STYLE
            : UNSELECTABLE_GENE_ITEM_STYLE
      }
      onPress={onPress}
    >
      <Text>{gene}</Text>
      <View style={{ flexDirection: "row", marginLeft: "auto" }}>
        {palette.map((color) => (
          <View
            style={{
              backgroundColor: color,
              borderWidth: 1,
              height: 20,
              width: 20,
            }}
          />
        ))}
      </View>
    </Pressable>
  );
}

export default GeneList;
