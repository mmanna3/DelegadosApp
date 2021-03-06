import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../../../constants/Colors";

interface Props {
  jugador: IJugador;
}

export default function JugadorCard(props: Props) {
  const primeraMayuscRestoMinusc = (texto: string) => {    
    const palabras = texto.split(" ");
    let resultado = "";
    
    palabras.forEach((palabra) => {
      resultado += `${palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() + " "}`;
    })
    
    return resultado;    
  }

  const { jugador } = props;
  return (
    <View style={styles.card}>
      {jugador.EstaSuspendido && (
        <Text style={styles.datoSuspendido}>JUGADOR SUSPENDIDO</Text>
      )}        
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
        <Text style={styles.datoVerde}>{jugador.DNI}</Text>
        <Text style={styles.datoAzul}>{jugador.Nombre}</Text>
        <Text style={styles.datoAzul}>{jugador.Apellido}</Text>
        <Text style={styles.datoRojo}>{jugador.FechaNacimiento}</Text>
        <Text style={styles.categoria}>Cat. {jugador.Categoria}</Text>
      </View>
      <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
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
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 10,
    width: 300,
    height: 450,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 32,
    borderColor: Colors.azul,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  equipo: {
    marginTop: 10,
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.40,
    color: Colors.verde,
  },
  tipoLiga: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.40,
    color: Colors.verde,
    marginTop: 5,
  },
  datoSuspendido: {
    width: 280,
    fontSize: 20,
    lineHeight: 21,    
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 7,
    paddingHorizontal: 4,
    backgroundColor: "red",
  },
  datoRojo: {
    marginBottom: 3,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.rojo,
    width: 200,
    textAlign: "center",
  },
  datoVerde: {
    marginBottom: 3,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.verde,
    width: 200,
    textAlign: "center",
  },
  datoAzul: {
    marginBottom: 3,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.azul,
    width: 200,
    textAlign: "center",
  },
  categoria: {
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.azul,
    width: 200,
    textAlign: "center",
  },
  foto: {
    marginVertical: 15,
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.azul,
  },
  logo: {
    width: 72,
    height: 72,
    position: 'absolute',
    bottom: 10,
    right: 5,
    opacity: 0.5,
  },
  datosContenedor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  }
});
