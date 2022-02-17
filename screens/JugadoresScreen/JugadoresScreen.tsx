import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import ContainerWithBackground from "../../components/ContainerWithBackground";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import GetJugadoresForm from "./components/GetJugadoresForm";
import JugadorCard from "./components/JugadorCard";

export default function JugadoresScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [jugadores, setJugadores] = useState<IJugador[]>([]);
  let categoriaAnterior: string = "";

  return (
    <>
      <ContainerWithBackground>
        <ScrollView>
          <GetJugadoresForm onSuccess={(res) => setJugadores(res)} />
          <View style={styles.cardsContainer}>
            {jugadores.map((jugador) => {
              let cambioLaCategoria;

              if (categoriaAnterior !== jugador.Categoria) {
                cambioLaCategoria = true;
                categoriaAnterior = jugador.Categoria;
              } else {
                cambioLaCategoria = false;
              }

              return (
                <>
                  {cambioLaCategoria ? (
                    <Text style={styles.categoria}>
                      Categoría {jugador.Categoria}
                    </Text>
                  ) : (
                    <></>
                  )}
                  <JugadorCard key={jugador.DNI} jugador={jugador} />
                </>
              );
            })}
          </View>
        </ScrollView>
      </ContainerWithBackground>
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
  categoria: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 5,
  },
});
