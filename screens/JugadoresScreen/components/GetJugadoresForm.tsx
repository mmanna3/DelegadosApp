import React, { Component, useState } from "react";
import { Alert, TextInput, View, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import { Text } from "../../../components/Themed";
import useGetJugadores from "./../hooks/useGetJugadores";

interface Props {
  onSuccess: (jugadores: any) => void;
}

export default function GetJugadoresForm(props: Props) {
  const [codigoEquipo, setCodigoEquipo] = useState("0GLS268");
  const [error, setError] = useState("");

  const { getJugadores, isLoading } = useGetJugadores();

  const obtenerJugadores = async () => {
    setError("");
    const resultado = await getJugadores({ codigoAlfanumerico: codigoEquipo });
    if (resultado.huboError == false) {
      props.onSuccess(resultado.contenido as IJugador[]);
    } else {
      setError(resultado.mensajeDeError);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Ingresá el código del equipo</Text>
      <TextInput
        value={codigoEquipo}
        onChangeText={(codigoEquipo) => setCodigoEquipo(codigoEquipo)}
        placeholder="Por ejemplo: 0AAA000"
        style={styles.input}
      />
      <Button title="Ver jugadores" onPress={obtenerJugadores} />
      {error != "" && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 16,
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  error: {
    elevation: 3,
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#ff6171",
    borderRadius: 4,
    borderColor: "#75000c",
    color: "#75000c",
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});
