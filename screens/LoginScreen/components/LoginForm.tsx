import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import { Text } from "../../../components/Themed";
import CommonStyles from "../../../constants/CommonStyles";
import { useAppContext } from "../../../store";
import useLogin from "./../hooks/useLogin";

interface Props {
  onSuccess: () => void;
}

export default function LoginForm(props: Props) {
  const { setUsuarioLogueado } = useAppContext();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isLoading } = useLogin();

  const loguearse = async () => {
    setError("");
    const resultado = await login({ Usuario: usuario, Password: password });
    if (resultado?.LoginExitoso === true) {
      setUsuarioLogueado({
        usuario: resultado.Usuario,
        club: resultado.Club,
        clubId: resultado.ClubId,
      });
      props.onSuccess();
    } else {
      resultado
        ? setError(resultado.Error)
        : setError("No se pudo conectar al servidor");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={usuario}
        onChangeText={(usuario) => setUsuario(usuario)}
        placeholder="Usuario"
        placeholderTextColor="#555"
        style={CommonStyles.input}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        placeholder="Contraseña"
        placeholderTextColor="#555"
        style={CommonStyles.input}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <Button title="Ingresar" onPress={loguearse} />
      )}
      {error != "" && <Text style={CommonStyles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
});
