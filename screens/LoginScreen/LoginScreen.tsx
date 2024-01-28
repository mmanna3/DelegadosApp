import React from "react";
import { Image, StyleSheet } from "react-native";
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
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>EDeFI Delegados</Text>
        <Text style={styles.subtitulo}>
          ¡Bienvenido, delegado! Si no tenés usuario, comunicate con la
          administración de la liga.
        </Text>
      </View>
      <LoginForm onSuccess={() => navigation.navigate("Principal")} />
    </ContainerWithBackground>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
  },
  logo: {
    width: 140,
    height: 140,
  },
  cabecera: {
    marginTop: 60,
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 30,
    textAlign: "center",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
