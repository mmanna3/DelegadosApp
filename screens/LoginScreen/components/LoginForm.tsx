import React, { Component, useState } from "react";
import { Alert, TextInput, View, StyleSheet } from "react-native";
import Button from "../../../components/Button";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

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

      <Button title="Ingresar" onPress={() => {}} />
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
});
