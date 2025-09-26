import {
  Group,
  Text,
  InputBase,
  Combobox,
  useCombobox,
  Flex,
} from "@mantine/core";
import React from "react";

interface SelectorProps_i<T extends string> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T;
  flexDirection?: "row" | "column";
  getImage: (value: T) => React.ReactElement;
  search?: boolean;
}

function Selector<T extends string>(props: SelectorProps_i<T>) {
  const { options, onSelect, getImage, value } = props;

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
      {getImage(option)}
      <Text truncate c="dark" fw={fw}>
        {option}
      </Text>
    </Group>
  );

  const filteredOptions = props.search
    ? options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase()),
      )
    : options;

  const formattedOptions = filteredOptions.map((option) => (
    <Combobox.Option value={option} key={option} selected={option === value}>
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
      <Text truncate>{props.title}</Text>
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
        <Combobox.Dropdown miw={200}>
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
