import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tarjetas(props: { amarillas: number; rojas: number }) {
  return (
    <View style={styles.container}>
      {props.amarillas !== 0 && (
        <View style={styles.tarjetasRenglon}>
          <Text style={styles.texto}>{props.amarillas}</Text>
          <View style={styles.tarjetaAmarilla} />
        </View>
      )}
      {props.rojas !== 0 && (
        <View style={styles.tarjetasRenglon}>
          <Text style={styles.texto}>{props.rojas}</Text>
          <View style={styles.tarjetaRoja} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  texto: {
    fontWeight: "600",
  },
  tarjetasRenglon: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 7,
  },
  tarjetaAmarilla: {
    bottom: 10,
    marginLeft: 4,
    width: 15,
    height: 20,
    backgroundColor: "yellow",
    borderWidth: 1,
  },
  tarjetaRoja: {
    marginLeft: 6,
    width: 15,
    height: 20,
    backgroundColor: "red",
    borderWidth: 1,
  },
});
