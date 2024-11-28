import Select from "react-select";
import { View, Text } from "react-native";

interface SelectorProps {
  title: string;
  onSelect: (item: string) => void;
  options: string[];
  value: string | null;
}

function Selector(props: SelectorProps) {
  const { title, onSelect, options, value } = props;

  const formattedOptions = options.map((option) => ({
    label: option,
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
        value={value ? { label: value, value } : undefined}
        onChange={(option) => option && onSelect(option.value!)}
        closeMenuOnSelect
        menuPortalTarget={document.body}
        menuPosition="fixed"
      />
    </View>
  );
}

export default Selector;
