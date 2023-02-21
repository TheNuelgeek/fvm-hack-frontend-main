import { Colors } from "./types";

export const baseColors = {
  failure: "#922724",
  primary: "#194ec9",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#333",
  success: "#004225",
  warning: "#FFB237",
};

// FF7D00 yellow
/*
#FFFFFF - light green



*/

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#194ec9",
  background: "#010101",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#E9EAEB",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#A9A9A9",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#194ec9",
  textDisabled: "#BDC2C4",
  textSubtle: "#010101",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #d9d9d9 0%, #d9d9d9 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#FFFFFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#010101",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#010101",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF ",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0a0c15 0%, #010101100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
