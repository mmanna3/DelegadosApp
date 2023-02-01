import React from "react";
import { Image, Text, View } from "react-native";
import { IJugador } from "../../../types/IJugador";
import { styles } from "./JugadorCardEstilos";

interface Props {
  jugador: IJugador;
}

export default function JugadorActivoCard(props: Props) {
  const primeraMayuscRestoMinusc = (texto: string) => {
    const palabras = texto.split(" ");
    let resultado = "";

    palabras.forEach((palabra) => {
      resultado += `${
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() + " "
      }`;
    });

    return resultado;
  };

  const { jugador } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.equipo}>
        {primeraMayuscRestoMinusc(jugador.Equipo)}
      </Text>
      <Text style={styles.tipoLiga}>
        {primeraMayuscRestoMinusc(jugador.TipoLiga)}
      </Text>

      <Image
        style={styles.foto}
        source={{ uri: `data:image/jpeg;base64,${jugador.FotoBase64}` }}
      />
      <View style={styles.datosContenedor}>
        <>
          <Text style={styles.datoVerde}>{jugador.DNI}</Text>
          <Text style={styles.datoAzul}>{jugador.Nombre}</Text>
          <Text style={styles.datoAzul}>{jugador.Apellido}</Text>
          <Text style={styles.datoRojo}>{jugador.FechaNacimiento}</Text>
          <Text style={styles.categoria}>Cat. {jugador.Categoria}</Text>
        </>
      </View>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}
