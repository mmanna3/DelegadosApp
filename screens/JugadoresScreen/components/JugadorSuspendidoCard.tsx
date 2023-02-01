import React from "react";
import { Image, Text, View } from "react-native";
import { IJugador } from "../../../types/IJugador";
import { styles } from "./JugadorCardEstilos";
import Tarjetas from "./Tarjetas";

interface Props {
  jugador: IJugador;
}

export default function JugadorInhabilitadoCard(props: Props) {
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
      <Text style={styles.datoSuspendido}>JUGADOR SUSPENDIDO</Text>
      <Text style={styles.equipoSuspendido}>
        {primeraMayuscRestoMinusc(jugador.Equipo)}
      </Text>
      <Text style={styles.tipoLigaSuspendido}>
        {primeraMayuscRestoMinusc(jugador.TipoLiga)}
      </Text>

      <Image
        style={styles.foto}
        source={{ uri: `data:image/jpeg;base64,${jugador.FotoBase64}` }}
      />
      <View style={styles.datosContenedor}>
        <>
          <Text style={styles.datoNegro}>{jugador.DNI}</Text>
          <Text style={styles.datoNegro}>{jugador.Nombre}</Text>
          <Text style={styles.datoNegro}>{jugador.Apellido}</Text>
          <Text style={styles.datoNegro}>{jugador.FechaNacimiento}</Text>
          <Text style={styles.datoNegro}>Cat. {jugador.Categoria}</Text>
        </>
      </View>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Tarjetas
        amarillas={jugador.TarjetasAmarillas}
        rojas={jugador.TarjetasRojas}
      />
    </View>
  );
}
