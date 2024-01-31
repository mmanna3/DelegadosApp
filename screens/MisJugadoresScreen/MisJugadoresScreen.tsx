import { useEffect, useState } from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Spinner from "../../components/Spinner";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import CommonStyles from "../../constants/CommonStyles";
import { useAppContext } from "../../store";
import {
  EstadoJugadorAutofichadoEnum,
  IJugadorAutofichado,
} from "../../types/IJugador";
import useJugadoresAutofichados from "./hooks/useJugadoresAutofichados";

export default function MisJugadoresScreen() {
  const [error, setError] = useState("");
  const [jugadores, setJugadores] = useState<IJugadorAutofichado[]>([]);
  const { usuarioLogueado } = useAppContext();
  const { getJugadoresAutofichados, isLoading } = useJugadoresAutofichados();

  useEffect(() => {
    const obtenerJugadores = async () => {
      setError("");
      const resultado = await getJugadoresAutofichados({
        clubId: usuarioLogueado ? usuarioLogueado?.clubId : 0,
      });
      if (resultado.huboError === false) {
        setJugadores(resultado.contenido as IJugadorAutofichado[]);
      } else {
        setError(resultado.mensajeDeError);
      }
    };

    obtenerJugadores();
  }, []);

  function elegirEstiloDeCardSegunEstado(estado: EstadoJugadorAutofichadoEnum) {
    const mapa: Record<EstadoJugadorAutofichadoEnum, StyleProp<ViewStyle>> = {
      [EstadoJugadorAutofichadoEnum.Aprobado]: styles.cardAprobado,
      [EstadoJugadorAutofichadoEnum.Rechazado]: styles.cardRechazado,
      [EstadoJugadorAutofichadoEnum.PendienteDeAprobacion]:
        styles.cardPendiente,
    };

    return mapa[estado];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Jugadores de{" "}
        <Text style={{ fontWeight: "bold" }}>{usuarioLogueado?.club}</Text>
      </Text>

      {isLoading ? (
        <Spinner />
      ) : (
        <ScrollView>
          {jugadores.map((jugador) => (
            <View
              key={jugador.DNI}
              style={elegirEstiloDeCardSegunEstado(jugador.Estado)}
            >
              <View style={styles.renglon}>
                <Text style={styles.datoNombre}>{jugador.Nombre}</Text>
                <Text style={styles.datoNombre}>{jugador.Apellido}</Text>
              </View>
              <View style={styles.renglon}>
                <Text style={styles.datoMenosImportante}>
                  DNI {jugador.DNI}
                </Text>
              </View>
              {/* <View style={styles.renglon}>
                <Text style={styles.datoMenosImportante}>
                  {jugador.FechaNacimiento}
                </Text>
              </View> */}
              <View style={styles.renglon}>
                <Text style={styles.datoEstado}>
                  {jugador.EstadoDescripcion}
                </Text>
              </View>
              {jugador.MotivoDeRechazo !== "" && (
                <View style={styles.renglon}>
                  <Text style={styles.motivoRechazo}>
                    {jugador.MotivoDeRechazo}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}
      {error !== "" && <Text style={CommonStyles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  datoEstado: {
    textTransform: "uppercase",
    fontSize: 15,
    borderWidth: 0.5,
    padding: 5,
    fontWeight: "bold",
    marginHorizontal: 3,
    lineHeight: 21,
    letterSpacing: 0.4,
    color: Colors.negro,
    textAlign: "center",
    marginTop: 10,
  },
  datoNombre: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 3,
    lineHeight: 21,
    letterSpacing: 0.4,
    color: Colors.negro,
    textAlign: "center",
  },
  datoMenosImportante: {
    fontSize: 15,
    // fontWeight: "bold",
    marginHorizontal: 3,
    lineHeight: 21,
    letterSpacing: 0.4,
    color: Colors.negro,
    textAlign: "center",
  },
  motivoRechazo: {
    marginTop: 10,
    fontSize: 15,
    marginHorizontal: 3,
    lineHeight: 21,
    letterSpacing: 0.4,
    color: Colors.negro,
    textAlign: "center",
  },
  renglon: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  // todos las properties de las card son iguales salvo el color (es difícil heredar)
  cardRechazado: {
    marginVertical: 5,
    width: 300,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    // borderWidth: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.rojo,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  cardAprobado: {
    marginVertical: 5,
    width: 300,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.verde,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  cardPendiente: {
    marginVertical: 5,
    width: 300,
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.amarillo,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  titulo: {
    fontSize: 17,
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 30,
    textAlign: "center",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
