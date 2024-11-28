import Select from "react-select";
import { View, Text } from "react-native";

interface SelectorProps<T> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T | null;
}

type SelectorOption_t<T> = { label: string; value: T };

function Selector<T>(props: SelectorProps<T>) {
  const { title, onSelect, options, value } = props;

  const formattedOptions: SelectorOption_t<T>[] = options.map((option) => ({
    label: `${option}`,
    value: option,
  }));

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        padding: 4,
        width: "100%",
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

export default Selector;
