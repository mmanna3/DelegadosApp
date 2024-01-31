import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
  cardSuspendida: {
    marginBottom: 10,
    width: 300,
    height: 450,
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
    height: 460,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 32,
    borderColor: Colors.azul,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  equipo: {
    marginTop: 10,
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.verde,
  },
  equipoSuspendido: {
    marginTop: 10,
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#000",
  },
  tipoLigaSuspendido: {
    marginTop: 10,
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#000",
  },
  tipoLiga: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Colors.verde,
    marginTop: 5,
  },
  datoInhabilitado: {
    textAlign: "center",
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
    backgroundColor: "#111",
  },
  datoSuspendido: {
    textAlign: "center",
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
  datoNegro: {
    marginBottom: 3,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#000",
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
    position: "absolute",
    bottom: 10,
    right: 5,
    opacity: 0.5,
  },
  datosContenedor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});