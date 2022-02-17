import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

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
  card: {
    marginBottom: 10,
    width: 300,
    height: 420,
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
