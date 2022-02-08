import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import LoginForm from "./components/LoginForm";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDeFI Delegados</Text>
      <Text style={styles.subtitulo}>
        ¡Bienvenido, delegado! Si no tenés usuario, comunicate con la
        administración de la liga.
      </Text>
      <LoginForm onSuccess={() => navigation.navigate("Jugadores")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
