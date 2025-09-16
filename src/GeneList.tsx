import React from "react";

import {
  Gene_t,
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
import {
  ActionIcon,
  Button,
  ColorSwatch,
  Combobox,
  Flex,
  Text,
  Tooltip,
  useCombobox,
} from "@mantine/core";

import {
  IconBan,
  IconSortAscending,
  IconSortDescending,
} from "@tabler/icons-react";
import { capitalize } from "lodash";

interface GeneListProps {
  category: GeneCategory_t;
}

function GeneList(props: GeneListProps) {
  const { category } = props;

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [sort, setSort] = React.useState<"abc" | "available">("abc");
  const [asc, setAsc] = React.useState<boolean>(true);

  const {
    setPrimaryGene,
    setSecondaryGene,
    setTertiaryGene,
    primaryGene,
    secondaryGene,
    tertiaryGene,
    primary,
    secondary,
    tertiary,
    breed,
  } = useDragonCtx();

  const sortFunction = (a: Gene_t, b: Gene_t) => {
    const ascModifier = asc ? 1 : -1;
    // availability case
    if (sort === "available") {
      if (dragonHasGene(breed, category, b)) return 1 * ascModifier;
      else if (dragonHasGene(breed, category, a)) return -1 * ascModifier;
      else return -1;
    }
    // alphabetical case
    if (a > b) {
      return 1 * ascModifier;
    } else return -1 * ascModifier;
  };

  const geneList = React.useMemo(() => {
    if (category === "primary") {
      return PRIMARY_GENES.sort(sortFunction).map((gene) => (
        <GeneItem<PrimaryGene_t>
          gene={gene}
          key={`${category}-${gene}`}
          setGene={setPrimaryGene}
          palette={getGeneColorList(primary, gene, category)}
          isAvailable={dragonHasGene(breed, category, gene)}
          isSelected={gene === primaryGene}
        />
      ));
    } else if (category === "secondary") {
      return SECONDARY_GENES.sort(sortFunction).map((gene) => (
        <GeneItem<SecondaryGene_t>
          gene={gene}
          key={`${category}-${gene}`}
          setGene={setSecondaryGene}
          palette={getGeneColorList(secondary, gene, category)}
          isAvailable={dragonHasGene(breed, category, gene)}
          isSelected={gene === secondaryGene}
        />
      ));
    } else {
      return TERTIARY_GENES.sort(sortFunction).map((gene) => (
        <GeneItem<TertiaryGene_t>
          gene={gene}
          key={`${category}-${gene}`}
          setGene={setTertiaryGene}
          palette={getGeneColorList(tertiary, gene, category)}
          isAvailable={dragonHasGene(breed, category, gene)}
          isSelected={gene === tertiaryGene}
        />
      ));
    }
  }, [
    primaryGene,
    secondaryGene,
    tertiaryGene,
    primary,
    secondary,
    tertiary,
    breed,
    sort,
    asc,
  ]);

  const icon = asc ? <IconSortAscending /> : <IconSortDescending />;

  return (
    <Flex
      direction="column"
      flex="1 1 0"
      style={{
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Flex
        direction="row"
        style={{
          alignItems: "center",
          padding: 4,
          background: "white",
        }}
      >
        <Text>{capitalize(props.category)}</Text>
        <Flex style={{ marginLeft: "auto" }}>
          <Combobox
            width={250}
            store={combobox}
            onOptionSubmit={(val: string) => {
              if (val === "available" || val === "abc") {
                if (sort === val) {
                  setAsc(!asc);
                } else {
                  setSort(val);
                  setAsc(true);
                }
              }

              combobox.closeDropdown();
            }}
          >
            <Tooltip label="Sort">
              <Combobox.DropdownTarget>
                <ActionIcon
                  variant="transparent"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {icon}
                </ActionIcon>
              </Combobox.DropdownTarget>
            </Tooltip>
            <Combobox.Dropdown>
              <Combobox.Options style={{ overflowY: "auto" }}>
                <Combobox.Option
                  value="abc"
                  key="abc"
                  selected={sort === "abc"}
                >
                  <Flex direction="row" style={{ gap: 2 }}>
                    {sort === "abc" && icon}
                    <Text fw={sort === "abc" ? 800 : undefined}>
                      Alphabetical order
                    </Text>
                  </Flex>
                </Combobox.Option>
                <Combobox.Option value="available" key="available">
                  <Flex direction="row" style={{ gap: 2 }}>
                    {sort === "available" && icon}
                    <Text fw={sort === "available" ? 800 : undefined}>
                      Order by Availability
                    </Text>
                  </Flex>
                </Combobox.Option>
              </Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        style={{
          alignItems: "flex-start",
          width: "100%",
          overflowY: "scroll",
          scrollbarGutter: "stable both-edges",
          border: "1px solid",
        }}
      >
        <Flex
          direction="column"
          style={{
            gap: 4,
            width: "100%",
            padding: 4,
          }}
        >
          {geneList}
        </Flex>
      </Flex>
    </Flex>
  );
}

interface GeneItemConfigProps_i<T extends string> {
  gene: T;
  isAvailable: boolean;
  isSelected: boolean;
  palette: GeneColorMapping_t[];
  setGene: (gene: T) => void;
}

function GeneItem<T extends string>(props: GeneItemConfigProps_i<T>) {
  const { gene, isAvailable, isSelected, palette, setGene } = props;
  const button = (
    <Button
      variant="outline"
      onClick={() => setGene(gene)}
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
}

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
    {!props.isAvailable && (
      <Tooltip label="Gene is not available for this breed">
        <ActionIcon
          size="sm"
          variant="transparent"
          data-disabled
          onClick={(event) => event.preventDefault()}
        >
          <IconBan />
        </ActionIcon>
      </Tooltip>
    )}
    <Text>{props.gene}</Text>
    <Flex direction="row" style={{ marginLeft: "auto" }}>
      <Palette palette={props.palette} />
    </Flex>
  </Flex>
);

export default GeneList;
