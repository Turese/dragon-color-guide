import React from "react";

import { View, Text, Pressable, StyleProp, TextStyle } from "react-native";

import {
  GeneCategory_t,
  PRIMARY_GENES,
  PrimaryGene_t,
  SECONDARY_GENES,
  SecondaryGene_t,
  TERTIARY_GENES,
  TertiaryGene_t,
} from "./constants/genes";
import { dragonHasGene } from "./constants/dragonBreeds";
import {
  GENE_ITEM_STYLE,
  INVALID_ITEM_STYLE,
  LEFTHAND_GENE_ITEM_STYLE,
  LEFTHAND_GENE_ITEM_TEXT_STYLE,
  SELECTED_GENE_ITEM_STYLE,
  SELECTED_INVALID_ITEM_STYLE,
} from "./constants/styles";
import { GeneColorMapping_t, getGeneColorList } from "./helpers/colorMapping";
import { useDragonCtx } from "./dragonCtx";

interface GeneListProps {
  category: GeneCategory_t;
}

function GeneList(props: GeneListProps) {
  const { category } = props;

  const geneList = React.useMemo(() => {
    if (category === "primary") {
      return PRIMARY_GENES.map((gene) => (
        <PrimaryGeneItem gene={gene} key={`tertiary-${gene}`} />
      ));
    } else if (category === "secondary") {
      return SECONDARY_GENES.map((gene) => (
        <SecondaryGeneItem gene={gene} key={`secondary-${gene}`} />
      ));
    } else {
      return TERTIARY_GENES.map((gene) => (
        <TertiaryGeneItem gene={gene} key={`tertiary-${gene}`} />
      ));
    }
  }, [category]);

  return <View style={{ padding: 4, width: "100%" }}>{geneList}</View>;
}

function PrimaryGeneItem(props: { gene: PrimaryGene_t }) {
  const { gene } = props;
  const { breed, primary, primaryGene, setPrimaryGene } = useDragonCtx();
  return (
    <GeneItem
      gene={gene}
      isAvailable={!!breed && dragonHasGene(breed, "primary", gene)}
      isSelected={gene === primaryGene}
      onPress={() => setPrimaryGene(gene)}
      palette={getGeneColorList(primary, gene, "primary")}
    />
  );
}

function SecondaryGeneItem(props: { gene: SecondaryGene_t }) {
  const { gene } = props;
  const { breed, secondary, secondaryGene, setSecondaryGene } = useDragonCtx();
  return (
    <GeneItem
      gene={gene}
      isAvailable={!!breed && dragonHasGene(breed, "secondary", gene)}
      isSelected={gene === secondaryGene}
      onPress={() => setSecondaryGene(gene)}
      palette={getGeneColorList(secondary, gene, "secondary")}
    />
  );
}

function TertiaryGeneItem(props: { gene: TertiaryGene_t }) {
  const { gene } = props;
  const { breed, tertiary, tertiaryGene, setTertiaryGene } = useDragonCtx();
  return (
    <GeneItem
      gene={gene}
      isAvailable={!!breed && dragonHasGene(breed, "tertiary", gene)}
      isSelected={gene === tertiaryGene}
      onPress={() => setTertiaryGene(gene)}
      palette={getGeneColorList(tertiary, gene, "tertiary")}
    />
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
      {!palette.length && <View style={{ height: 20 }} />}
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

export const Swatch = ({ color, isPrimary }: SwatchConfig) => (
  <View>
    <View
      style={{
        opacity: 1,
        backgroundColor: color,
        borderWidth: 1,
        margin: isPrimary ? 1 : 6, // extra margin aims to make minor colors take up the same amount of space
        height: isPrimary ? 20 : 10,
        width: isPrimary ? 20 : 10,
      }}
    />
  </View>
);

export const LefthandGeneView = (props: {
  palette: GeneColorMapping_t[];
  gene: string;
  isAvailable: boolean;
}) => (
  <View style={LEFTHAND_GENE_ITEM_STYLE}>
    {!props.isAvailable && <Text>!!!</Text>}
    <Text style={LEFTHAND_GENE_ITEM_TEXT_STYLE}>{props.gene}</Text>
    <View style={{ flexDirection: "row", marginLeft: "auto" }}>
      {!props.palette.length && <View style={{ height: 20 }} />}
      {props.palette.map((colorMapping: GeneColorMapping_t) => (
        <Swatch
          color={colorMapping.color}
          tooltip={colorMapping.name}
          isPrimary={colorMapping.isPrimary}
        />
      ))}
    </View>
  </View>
);

export default GeneList;
