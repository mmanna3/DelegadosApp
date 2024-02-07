import { Alert, StyleSheet } from "react-native";
import ContainerWithBackground from "../../components/ContainerWithBackground";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import CambiarPasswordForm from "./components/CambiarPasswordForm";

export default function CambiarPasswordScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const mostrarAlertaExito = (mensaje: string) =>
    Alert.alert("¡Bien!", mensaje, [], {
      cancelable: true,
    });

  const onSuccess = (mensajeExito: string) => {
    mostrarAlertaExito(mensajeExito);
    navigation.navigate("Root");
  };

  return (
    <ContainerWithBackground>
      <View style={styles.cabecera}>
        <Text style={styles.title}>Cambio de contraseña</Text>
        <Text style={styles.subtitulo}>
          Tiene que estar habilitado por la administración de EDeFI para poder
          cambiar su contraseña.
        </Text>
      </View>
      <CambiarPasswordForm onSuccess={(mensaje) => onSuccess(mensaje)} />
    </ContainerWithBackground>
  );
}

const styles = StyleSheet.create({
  cabecera: {
    marginTop: 60,
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  subtitulo: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 30,
    textAlign: "center",
    color: "black",
  },
});
