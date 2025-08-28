import {
  Group,
  Text,
  InputBase,
  Combobox,
  useCombobox,
  Flex,
} from "@mantine/core";
import { Swatch } from "./GeneList";

interface SelectorProps_i<T extends React.Key> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T | null;
  flexDirection?: "row" | "column";
  getColor?: (value: T) => string;
}

function Selector<T extends React.Key>(props: SelectorProps_i<T>) {
  const { options, onSelect, getColor, value } = props;

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
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

  const formattedOptions = options.map((option) => (
    <Combobox.Option value={option.toString()} key={option}>
      {formatOption(option, option === value ? "800" : undefined)}
    </Combobox.Option>
  ));

  return (
    <Flex
      direction={props.flexDirection}
      wrap="nowrap"
      justify="stretch"
      align="center"
      style={{ gap: "auto" }}
      flex={1}
    >
      <Text>{props.title}</Text>
      <Combobox
        width="target"
        store={combobox}
        withinPortal={false}
        onOptionSubmit={handleValueSelect}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            style={{
              marginLeft: "auto",
              width: props.flexDirection === "column" ? "100%" : "50%",
              padding: 2,
            }}
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
          >
            {value ? (
              formatOption(value)
            ) : (
              <Text c="dimmed" size="sm">
                {"placeholder"}
              </Text>
            )}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options mah={300} style={{ overflowY: "auto" }}>
            {formattedOptions}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Flex>
  );
}

export default Selector;
