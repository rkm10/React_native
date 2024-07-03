import {
  View,
  ImageBackground,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

// export function ThemedbackgroundView() {
//   return (
//     <ImageBackground
//       source={require("@/assets/images/pokemon-logo.png")}
//       style={[styles.backgroundImage]}
//     ></ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: "100%",
//     height: "100vh",
//     opacity: 0.1,
//   },
//   overlay: {
//     // flex: 1,
//     // backgroundColor: "transparent",
//   },
// });
