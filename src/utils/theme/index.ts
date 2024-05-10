import { textVariants } from "./text-variants";
import { createTheme, createBox, createText } from "@shopify/restyle";
import { colors } from "./colors";

const theme = createTheme({
  colors: colors,
  spacing: {
    "1": 4,
    "2": 8,
    "3": 12,
    "3.5": 14,
    "4": 16,
    "5": 20,
    "5.5": 22,
    "6": 24,
    "10": 40,
    "11": 44,
    "12": 48,
    "13": 56,
  },
  borderRadii: {
    none: 0,
    rounded: 4,
    "rounded-x1": 8,
    "rounded-2x1": 10,
    "rounded-3x1": 12,
    "rounded-4x1": 16,
    "rounded-5x1": 20,
    "rounded-7x1": 28,
  },
  textVariants,
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
