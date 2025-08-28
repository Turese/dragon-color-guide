import { MantineStyleProp } from "@mantine/core";

export const SECTION_BORDER: MantineStyleProp = {
  borderRadius: "8px",
  border: "1px solid white",
};

export const SECTION_STYLE: MantineStyleProp = {
  alignItems: "flex-start",
  flex: 1,
  overflow: "scroll",
  ...SECTION_BORDER,
};

export const GENE_ITEM_STYLE: MantineStyleProp = {
  alignItems: "center",
  flexDirection: "row",
  gap: 4,
  padding: 4,
  marginTop: 2,
  marginBottom: 2,
  width: "100%",
  overflow: "scroll",
  borderRadius: "8px",
  borderWidth: 1,
};

export const LEFTHAND_GENE_ITEM_STYLE: MantineStyleProp = {
  alignItems: "center",
  flexDirection: "row",
  gap: 4,
  padding: 4,
  marginTop: 2,
  marginBottom: 2,
  width: "100%",
  overflow: "scroll",
  borderRadius: "8px",
};

export const LEFTHAND_GENE_ITEM_TEXT_STYLE: MantineStyleProp = {
  fontWeight: 200,
};

export const SELECTED_GENE_ITEM_TEXT_STYLE: MantineStyleProp = {
  fontWeight: "bold",
};
