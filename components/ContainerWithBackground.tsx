import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

interface IProps {
  children: ReactNode;
}

export default function ContainerWithBackground({ children }: IProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
