import { TextStyle, ViewStyle } from "react-native";

const SECTION_BORDER: ViewStyle = {
  borderColor: "#1e1914",
  borderRadius: "8px",
  borderWidth: 1,
};

export const SECTION_STYLE: ViewStyle = {
  alignItems: "center",
  backgroundColor: "#ffffff",
  flex: 1,
  overflow: "scroll",
  ...SECTION_BORDER,
};

export const GENE_ITEM_STYLE: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  gap: 4,
  padding: 4,
  marginTop: 2,
  marginBottom: 2,
  width: "100%",
  overflow: "scroll",
  borderColor: "#1e1914",
  borderRadius: "8px",
  borderWidth: 1,
};

export const INVALID_ITEM_STYLE: ViewStyle = {
  borderColor: "#ded5d2",
  backgroundColor: "#f7f7f7",
};

export const SELECTED_GENE_ITEM_STYLE: ViewStyle = {
  backgroundColor: "#bcaca6",
};

export const SELECTED_INVALID_ITEM_STYLE: ViewStyle = {
  backgroundColor: "#e9e0dd",
};

export const SELECTED_GENE_ITEM_TEXT_STYLE: TextStyle = { fontWeight: "bold" };
