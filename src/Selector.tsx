import Select from "react-select";
import { View, Text, Switch, DimensionValue } from "react-native";

interface SelectorProps<T> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T | null;
  flexDirection?: "row" | "column";
  width?: DimensionValue;
}

type SelectorOption_t<T> = { label: string; value: T };

function Selector<T>(props: SelectorProps<T>) {
  const { title, onSelect, options, value, width, flexDirection } = props;

  const formattedOptions: SelectorOption_t<T>[] = options.map((option) => ({
    label: `${option}`,
    value: option,
  }));

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: flexDirection || "row",
        padding: 4,
        gap: 4,
        width: width || "100%",
      }}
    >
      <View style={{ alignItems: "flex-start", width: "40%" }}>
        <Text>{title}</Text>
      </View>
      <Select
        options={formattedOptions}
        value={
          value
            ? ({ label: `${value}`, value } as SelectorOption_t<T>)
            : undefined
        }
        onChange={(option) => option && onSelect(option.value!)}
        closeMenuOnSelect
        menuPortalTarget={document.body}
        menuPosition="fixed"
      />
    </View>
  );
}

interface SwitchSelectorProps {
  title: string;
  value: boolean;
  onSelect: () => void;
  width?: DimensionValue;
}

export function SwitchSelector(props: SwitchSelectorProps) {
  const { title, onSelect, value, width } = props;

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        padding: 4,
        width: width || "100%",
      }}
    >
      <View style={{ alignItems: "flex-start", width: "40%" }}>
        <Text>{title}</Text>
      </View>
      <Switch value={value} onValueChange={onSelect} />
    </View>
  );
}

export default Selector;
