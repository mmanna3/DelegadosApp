import React from "react";
import { StyleSheet } from "react-native";
import ContainerWithBackground from "../../components/ContainerWithBackground";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import LoginForm from "./components/LoginForm";

export default function LoginScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ContainerWithBackground>
      <View style={styles.cabecera}>
        <Text style={styles.title}>EDeFI Delegados</Text>
        <Text style={styles.subtitulo}>
          ¡Bienvenido, delegado! Si no tenés usuario, comunicate con la
          administración de la liga.
        </Text>
      </View>
      <LoginForm onSuccess={() => navigation.navigate("Jugadores")} />
    </ContainerWithBackground>
  );
}

const styles = StyleSheet.create({
  cabecera: {
    marginTop: 80,
    paddingTop: 20,
    backgroundColor: "rgba(210, 210, 210, 0.6)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 30,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
