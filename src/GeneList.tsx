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
  GENE_ITEM_STYLE,
  INVALID_ITEM_STYLE,
  SELECTED_GENE_ITEM_STYLE,
  SELECTED_INVALID_ITEM_STYLE,
} from "./constants/styles";
import { GeneColorMapping_t, getGeneColorList } from "./helpers/colorMapping";

interface GeneListProps<T extends Gene_t> {
  color: Color_t;
  category: GeneCategory_t;
  breed: Dragon_t | null;
  selected: T;
  onSelect: (gene: T) => void;
}

function GeneList<T extends Gene_t>(props: GeneListProps<T>) {
  const { color, category, breed, selected, onSelect } = props;

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
      palette: getGeneColorList(color, gene, category) || [], // todo: find palette for each color -> gene combination
    }));
  }, [breed, category, selected, color, onSelect]);

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
  palette: GeneColorMapping_t[];
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
      ...GENE_ITEM_STYLE,
      ...(!isAvailable ? INVALID_ITEM_STYLE : null),
      ...(isSelected
        ? isAvailable
          ? SELECTED_GENE_ITEM_STYLE
          : SELECTED_INVALID_ITEM_STYLE
        : null),
    }}
    onPress={onPress}
  >
    <Text
      style={{
        fontWeight: isSelected ? "bold" : undefined,
        opacity: isAvailable ? 1 : 0.5,
      }}
    >
      {gene}
    </Text>
    <View style={{ flexDirection: "row", marginLeft: "auto" }}>
      {palette.map((colorMapping: GeneColorMapping_t) => (
        <Swatch
          color={colorMapping.color}
          tooltip={colorMapping.name}
          isPrimary={colorMapping.isPrimary}
        />
      ))}
    </View>
  </Pressable>
);

interface SwatchConfig {
  color: string;
  tooltip?: string;
  isPrimary?: boolean;
}

const Swatch = ({ color, isPrimary }: SwatchConfig) => (
  <View>
    <View
      style={{
        opacity: 1,
        backgroundColor: color,
        borderWidth: 1,
        margin: isPrimary ? 1 : 6, // extra margin aims to make secondary colors take up the same amount of space
        height: isPrimary ? 20 : 10,
        width: isPrimary ? 20 : 10,
      }}
    />
  </View>
);

export default GeneList;
