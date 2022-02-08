import React, { Component, useState } from "react";
import { Alert, TextInput, View, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import { Text } from "../../../components/Themed";
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
        placeholder="Usuario"
        style={styles.input}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        placeholder="Contraseña"
        style={styles.input}
      />

      <Button title="Ingresar" onPress={loguearse} />
      {error != "" && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  error: {
    elevation: 3,
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: "#ff6171",
    borderRadius: 4,
    borderColor: "#75000c",
    color: "#75000c",
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});
