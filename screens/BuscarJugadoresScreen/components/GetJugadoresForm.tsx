import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { Text } from "../../../components/Themed";
import CommonStyles from "../../../constants/CommonStyles";
import { useAppContext } from "../../../store";
import { IJugador } from "../../../types/IJugador";
import useGenerarPDF from "../hooks/useGenerarPDF";
import useGenerarPlanillas from "../hooks/useGenerarPlanillas";
import useGetJugadores from "../hooks/useGetJugadores";

interface Props {
  beforeRequest: () => void;
}

export default function GetJugadoresForm(props: Props) {
  const [codigoEquipo, setCodigoEquipo] = useState("");
  const [hayJugadores, setHayJugadores] = useState(false);
  const [error, setError] = useState("");
  const { setJugadores } = useAppContext();

  const { getJugadores, isLoading } = useGetJugadores();
  const { generarPDF, isLoading: PDFisLoading } = useGenerarPDF();
  const { generarPlanillas, isLoading: PlanillasIsLoading } =
    useGenerarPlanillas();

  const obtenerJugadores = async () => {
    props.beforeRequest();
    setError("");
    const resultado = await getJugadores({ codigoAlfanumerico: codigoEquipo });
    if (resultado.huboError === false) {
      setJugadores(resultado.contenido as IJugador[]);
      setHayJugadores(true);
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
      {isLoading || PDFisLoading || PlanillasIsLoading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.botonesContainer}>
            <Button title="Buscar" onPress={obtenerJugadores} />
            {hayJugadores && (
              <>
                <Button title="Generar PDF" onPress={generarPDF} />
                <Button
                  title="Planillas"
                  onPress={() => generarPlanillas(codigoEquipo)}
                />
              </>
            )}
          </View>
        </>
      )}
      {error !== "" && <Text style={CommonStyles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botonesContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
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
