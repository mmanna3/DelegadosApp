import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
  jugador: IJugador;
}

export default function JugadorCard(props: Props) {
  const { jugador } = props;
  return (
    <View style={styles.card}>
      {jugador.EstaSuspendido && (
        <Text style={styles.datoSuspendido}>JUGADOR SUSPENDIDO</Text>
      )}
      <Text style={styles.equipoYTorneo}>
        {jugador.Equipo} - {jugador.TipoLiga}
      </Text>
      <Image
        style={styles.foto}
        source={{ uri: `data:image/jpeg;base64,${jugador.FotoBase64}` }}
      />
      <Text style={styles.dato}>{jugador.DNI}</Text>
      <Text style={styles.dato}>{jugador.Nombre}</Text>
      <Text style={styles.dato}>{jugador.Apellido}</Text>
      <Text style={styles.dato}>{jugador.FechaNacimiento}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardSuspendida: {
    marginBottom: 10,
    width: 300,
    height: 430,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 32,
    elevation: 6,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 10,
    width: 300,
    height: 430,
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 32,
    elevation: 6,
    backgroundColor: "#01aa59",
    justifyContent: "center",
    alignItems: "center",
  },
  equipoYTorneo: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  datoSuspendido: {
    marginBottom: 30,
    marginTop: 15,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 4,
    backgroundColor: "red",
  },
  dato: {
    marginBottom: 3,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "white",
  },
  foto: {
    marginVertical: 15,
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },
});
