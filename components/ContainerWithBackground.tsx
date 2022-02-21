import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface IProps {
  children: ReactNode;
}

export default function ContainerWithBackground({ children }: IProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
