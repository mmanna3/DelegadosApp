import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { Text } from "../../../components/Themed";
import CommonStyles from "../../../constants/CommonStyles";
import { IJugador } from "../../../types/IJugador";
import useGetJugadores from "./../hooks/useGetJugadores";

interface Props {
  onSuccess: (jugadores: any) => void;
  beforeRequest: () => void;
}

export default function GetJugadoresForm(props: Props) {
  const [codigoEquipo, setCodigoEquipo] = useState("");
  const [error, setError] = useState("");

  const { getJugadores, isLoading } = useGetJugadores();

  const obtenerJugadores = async () => {
    props.beforeRequest();
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
        placeholder="Por ejemplo: AAA1234"
        style={CommonStyles.input}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Button title="Ver jugadores" onPress={obtenerJugadores} />
      )}
      {error != "" && <Text style={CommonStyles.error}>{error}</Text>}
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
});
