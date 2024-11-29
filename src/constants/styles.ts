import { ViewStyle } from "react-native";

const SECTION_BORDER: ViewStyle = {
  borderColor: "#1e1914",
  borderRadius: "10px",
  borderWidth: 2,
};

export const SECTION_STYLE: ViewStyle = {
  alignItems: "center",
  backgroundColor: "#ffffff",
  flex: 1,
  overflow: "scroll",
  ...SECTION_BORDER,
};

export const GENE_ITEM_STYLE: ViewStyle = {
  alignItems: "flex-end",
  flexDirection: "row",
  gap: 4,
  justifyContent: "center",
  padding: 4,
  width: "100%",
  ...SECTION_BORDER,
};

export const SELECTABLE_GENE_ITEM_STYLE: ViewStyle = {
  backgroundColor: "#ffffff",
  cursor: "pointer",
  ...GENE_ITEM_STYLE,
};

export const UNSELECTABLE_GENE_ITEM_STYLE: ViewStyle = {
  backgroundColor: "#ff0000",
  ...GENE_ITEM_STYLE,
};

export const SELECTED_GENE_ITEM_STYLE: ViewStyle = {
  backgroundColor: "#ff4444",
  ...GENE_ITEM_STYLE,
};
