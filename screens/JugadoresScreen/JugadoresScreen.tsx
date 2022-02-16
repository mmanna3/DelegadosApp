import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import GetJugadoresForm from "./components/GetJugadoresForm";
import JugadorCard from "./components/JugadorCard";

export default function JugadoresScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [jugadores, setJugadores] = useState<IJugador[]>([]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <GetJugadoresForm onSuccess={(res) => setJugadores(res)} />
          <View style={styles.cardsContainer}>
            {jugadores.map((jugador) => {
              return <JugadorCard key={jugador.DNI} jugador={jugador} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    marginTop: 20,
  },
});
