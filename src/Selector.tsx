import Select from "react-select";
import { View, Text, Switch, DimensionValue } from "react-native";
import { Swatch } from "./GeneList";
import { SELECTED_COLOR } from "./constants/styles";

interface SelectorProps<T> {
  title: string;
  onSelect: (item: T) => void;
  options: T[];
  value: T | null;
  flexDirection?: "row" | "column";
  width?: DimensionValue;
  getColor?: (value: T) => string;
}

type SelectorOption_t<T> = { label: string; value: T; color?: string };

function Selector<T>(props: SelectorProps<T>) {
  const { title, onSelect, options, value, width, flexDirection, getColor } =
    props;

  const formattedOptions: SelectorOption_t<T>[] = options.map((option) => ({
    label: `${option}`,
    value: option,
    color: getColor ? getColor(option) : undefined,
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
      <View
        style={{
          alignItems: "flex-start",
          width: flexDirection === "column" ? "100%" : "30%",
        }}
      >
        <Text numberOfLines={1}>{title}</Text>
      </View>
      <View style={{ width: flexDirection === "column" ? "100%" : "70%" }}>
        <Select
          options={formattedOptions}
          styles={{
            menu: (base) => ({
              ...base,
              width: "max-content",
              minWidth: "100%",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderColor: "#1e1914",
            borderRadius: 8,
            width: "100%",
            colors: {
              ...theme.colors,
              primary25: "#eadfdb",
              primary: SELECTED_COLOR,
            },
          })}
          value={
            value
              ? ({
                  label: `${value}`,
                  value,
                  color: getColor ? getColor(value) : undefined,
                } as SelectorOption_t<T>)
              : undefined
          }
          onChange={(option) => option && onSelect(option.value!)}
          closeMenuOnSelect
          menuPortalTarget={document.body}
          menuPosition="fixed"
          formatOptionLabel={(option) => {
            return (
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {option.color && <Swatch color={option.color} isPrimary />}
                <Text numberOfLines={1}>{option.label}</Text>
              </View>
            );
          }}
        />
      </View>
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
