import React, { Component, useState } from "react";
import { Alert, TextInput, View, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import { Text } from "../../../components/Themed";
import CommonStyles from "../../../constants/CommonStyles";
import useLogin from "./../hooks/useLogin";

interface Props {
  onSuccess: () => void;
}

export default function LoginForm(props: Props) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, isLoading } = useLogin();

  const loguearse = async () => {
    setError("");
    const resultado = await login({ Email: usuario, Password: password });
    if (resultado.LoginExitoso == true) {
      props.onSuccess();
    } else {
      setError(resultado.Error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={usuario}
        onChangeText={(usuario) => setUsuario(usuario)}
        placeholder="Email"
        style={CommonStyles.input}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        placeholder="Contraseña"
        style={CommonStyles.input}
      />

      <Button title="Ingresar" onPress={loguearse} />
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
