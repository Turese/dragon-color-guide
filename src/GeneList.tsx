import React from "react";

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
import { GeneColorMapping_t, getGeneColorList } from "./helpers/colorMapping";
import { useDragonCtx } from "./dragonCtx";
import { Button, ColorSwatch, Flex, Text, Tooltip } from "@mantine/core";

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

  return (
    <Flex style={{ flexDirection: "column", padding: 4, width: "100%" }}>
      {geneList}
    </Flex>
  );
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
}: GeneItemConfig) => {
  const button = (
    <Button
      m={2}
      variant="outline"
      onClick={onPress}
      fullWidth
      justify="space-between"
      data-disabled={!isAvailable}
      leftSection={
        <Text
          style={{
            fontWeight: isSelected ? "700" : undefined,
            opacity: isAvailable ? 1 : 0.5,
          }}
        >
          {gene}
        </Text>
      }
      rightSection={
        <Flex direction="row" style={{ marginLeft: "auto" }}>
          <Palette palette={palette} />
        </Flex>
      }
    />
  );

  if (!isAvailable)
    return (
      <Tooltip label="Gene is not available for this breed">{button}</Tooltip>
    );
  return button;
};

interface SwatchConfig_i {
  color: string;
  tooltip?: string;
  isPrimary?: boolean;
}

export const Swatch = ({ color, isPrimary }: SwatchConfig_i) => (
  <ColorSwatch
    color={color}
    size={isPrimary ? 20 : 12}
    m={isPrimary ? 2 : 6}
    radius="sm"
  />
);

interface PaletteConfig_i {
  palette: GeneColorMapping_t[];
}

export const Palette = ({ palette }: PaletteConfig_i) => (
  <Flex align="center">
    {!palette.length && <Flex style={{ height: 24 }} />}
    {palette.map((colorMapping: GeneColorMapping_t) => (
      <Swatch
        color={colorMapping.color}
        tooltip={colorMapping.name}
        isPrimary={colorMapping.isPrimary}
      />
    ))}
  </Flex>
);
export const LefthandGeneView = (props: {
  palette: GeneColorMapping_t[];
  gene: string;
  isAvailable: boolean;
}) => (
  <Flex
    direction="row"
    style={{
      alignItems: "center",
      gap: 4,
      padding: 4,
      marginTop: 2,
      marginBottom: 2,
      width: "100%",
      overflow: "scroll",
    }}
  >
    {!props.isAvailable && <Text>!!!</Text>}
    <Text>{props.gene}</Text>
    <Flex direction="row" style={{ marginLeft: "auto" }}>
      <Palette palette={props.palette} />
    </Flex>
  </Flex>
);

export default GeneList;
