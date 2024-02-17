import { Dimensions, ScrollView, StyleSheet } from "react-native";
import ContainerWithBackground from "../../components/ContainerWithBackground";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useAppContext } from "../../store";
import { EstadoJugadorEnum, IJugador } from "../../types/IJugador";
import GetJugadoresForm from "./components/GetJugadoresForm";
import JugadorActivoCard from "./components/JugadorActivoCard";
import JugadorInhabilitadoCard from "./components/JugadorInhablitadoCard";
import JugadorSuspendidoCard from "./components/JugadorSuspendidoCard";

export default function JugadoresScreen() {
  const { jugadores, setJugadores } = useAppContext();

  let categoriaAnterior: string = "";

  return (
    <ContainerWithBackground>
      <ScrollView>
        <GetJugadoresForm beforeRequest={() => setJugadores([])} />
        <View style={styles.cardsContainer}>
          {jugadores?.map((jugador, index) => {
            return (
              <View key={index} style={styles.container}>
                {cambioLaCategoria(jugador) ? (
                  <Text style={styles.categoria}>
                    Categoría {jugador.Categoria}
                  </Text>
                ) : (
                  <></>
                )}
                <>
                  {jugador.Estado === EstadoJugadorEnum.Activo ? (
                    <JugadorActivoCard key={jugador.DNI} jugador={jugador} />
                  ) : jugador.Estado === EstadoJugadorEnum.Suspendido ? (
                    <JugadorSuspendidoCard
                      key={jugador.DNI}
                      jugador={jugador}
                    />
                  ) : jugador.Estado === EstadoJugadorEnum.Inhabilitado ? (
                    <JugadorInhabilitadoCard
                      key={jugador.DNI}
                      jugador={jugador}
                    />
                  ) : null}
                </>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ContainerWithBackground>
  );

  function cambioLaCategoria(jugador: IJugador) {
    let cambioLaCategoriaFlag;

    if (categoriaAnterior !== jugador.Categoria) {
      cambioLaCategoriaFlag = true;
      categoriaAnterior = jugador.Categoria;
    } else {
      cambioLaCategoriaFlag = false;
    }
    return cambioLaCategoriaFlag;
  }
}

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  categoria: {
    width: Dimensions.get("window").width,
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 18,
    backgroundColor: Colors.azul,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 0.7,
    marginTop: 5,
  },
});
