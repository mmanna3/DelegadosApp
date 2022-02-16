import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import GetJugadoresForm from "./components/GetJugadoresForm";

export default function JugadoresScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [jugadores, setJugadores] = useState<IJugador[]>([]);

  return (
    <>
      <GetJugadoresForm onSuccess={(res) => setJugadores(res)} />
      {jugadores.map((jugador) => {
        return <Text key={jugador.DNI}>{jugador.Nombre}</Text>;
      })}
    </>
  );
}
