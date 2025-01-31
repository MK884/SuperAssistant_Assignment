import { Dimensions } from "react-native";

const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get("window");

export const wp = (percentage: number) => {
  return (percentage * DeviceWidth) / 100;
};

export const hp = (percentage: number) => {
  return (percentage * DeviceHeight) / 100;
};

export const colors = {
  primary: "#6C48C5",
  secondry: "#ECF2FF",
  neutral: (opacity: number) => `rgba(10,10,10, ${opacity})`,
};
