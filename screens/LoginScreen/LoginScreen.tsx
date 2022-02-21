import React from "react";
import { StyleSheet, Image } from "react-native";
import ContainerWithBackground from "../../components/ContainerWithBackground";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
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
      <LoginForm onSuccess={() => navigation.navigate("Jugadores")} />
    </ContainerWithBackground>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
  },
  cabecera: {
    marginTop: 60,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 30,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
