import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { Text } from "../../../components/Themed";
import CommonStyles from "../../../constants/CommonStyles";
import useCambiarPassword from "./../hooks/useCambiarPassword";

interface Props {
  onSuccess: (mensaje: string) => void;
}

export default function LoginForm(props: Props) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepetido, setPasswordRepetido] = useState("");
  const [error, setError] = useState("");

  const { cambiarPassword, isLoading } = useCambiarPassword();

  function sonLosPasswordIguales() {
    return password === passwordRepetido;
  }

  const _cambiarPassword = async () => {
    setError("");

    if (!sonLosPasswordIguales()) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const resultado = await cambiarPassword({
      Usuario: usuario,
      Password: password,
    });

    let resultadoJSON = JSON.parse(resultado);

    if (!resultadoJSON?.huboError) {
      props.onSuccess(resultadoJSON.contenido);
    } else {
      resultado
        ? setError(resultadoJSON.mensajeDeError)
        : setError("No se pudo conectar al servidor");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={usuario}
        onChangeText={(u) => setUsuario(u)}
        placeholder="Usuario"
        placeholderTextColor="#555"
        style={CommonStyles.input}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(p) => setPassword(p)}
        placeholder="Nueva contraseña"
        placeholderTextColor="#555"
        style={CommonStyles.input}
      />
      <TextInput
        value={passwordRepetido}
        secureTextEntry={true}
        onChangeText={(p) => setPasswordRepetido(p)}
        placeholder="Repetir contraseña"
        placeholderTextColor="#555"
        style={CommonStyles.input}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <Button title="Cambiar contraseña" onPress={_cambiarPassword} />
      )}
      {error !== "" && <Text style={CommonStyles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
});
