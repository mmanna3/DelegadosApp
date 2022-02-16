import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
  jugador: IJugador;
}

export default function JugadorCard(props: Props) {
  const { jugador } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.equipoYTorneo}>
        {jugador.Equipo} - {jugador.TipoLiga}
      </Text>
      <Text style={styles.dato}>{jugador.DNI}</Text>
      <Text style={styles.dato}>{jugador.Nombre}</Text>
      <Text style={styles.dato}>{jugador.Apellido}</Text>
      <Text style={styles.dato}>{jugador.FechaNacimiento}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    width: 300,
    height: 300,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#01aa59",
  },
  equipoYTorneo: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
  dato: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});
