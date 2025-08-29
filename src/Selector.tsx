import {
  Group,
  Text,
  InputBase,
  Combobox,
  useCombobox,
  Flex,
} from "@mantine/core";
import { Swatch } from "./GeneList";
import React from "react";

interface SelectorProps_i<T extends React.Key> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T;
  flexDirection?: "row" | "column";
  getColor?: (value: T) => string;
  search?: boolean;
}

function Selector<T extends React.Key>(props: SelectorProps_i<T>) {
  const { options, onSelect, getColor, value } = props;

  const [search, setSearch] = React.useState("");

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      setSearch("");
    },
    onDropdownOpen: () => {
      if (props.search) combobox.focusSearchInput();
    },
  });

  const handleValueSelect = (val: string) => {
    onSelect(val as T);
    combobox.closeDropdown();
  };

  const formatOption = (option: T, fw?: string) => (
    <Group gap="sm" wrap="nowrap">
      <Swatch color={getColor ? getColor(option) : "#fff"} isPrimary />
      <Text c="dark" fw={fw}>
        {option.toString()}
      </Text>
    </Group>
  );

  const filteredOptions = props.search
    ? options.filter((option) =>
        option.toString().toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const formattedOptions = filteredOptions.map((option) => (
    <Combobox.Option value={option.toString()} key={option}>
      {formatOption(option, option === value ? "800" : undefined)}
    </Combobox.Option>
  ));

  React.useEffect(() => {
    combobox.selectFirstOption();
  }, [search]);

  return (
    <Flex
      direction={props.flexDirection}
      wrap="nowrap"
      justify="space-between"
      align="center"
      flex={1}
    >
      <Text>{props.title}</Text>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
        <Combobox.DropdownTarget>
          <InputBase
            component="button"
            style={{
              marginLeft: props.flexDirection === "column" ? 0 : "auto",
              width: props.flexDirection === "column" ? "100%" : "50%",
              padding: 2,
            }}
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
          >
            {formatOption(value)}
          </InputBase>
        </Combobox.DropdownTarget>
        <Combobox.Dropdown>
          {props.search && (
            <Combobox.Search
              value={search}
              onChange={(event) => setSearch(event.currentTarget.value)}
              placeholder="Search"
            />
          )}
          <Combobox.Options mah={300} style={{ overflowY: "auto" }}>
            {formattedOptions}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Flex>
  );
}

export default Selector;
