import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../styles/colors";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CadastroScreen({ dark, onBack, onRegistered }) {
  const theme = dark ? colors.dark : colors.light;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name.trim()) { setError("Digite seu nome"); return; }
    if (!emailRegex.test(email)) { setError("Digite um e-mail válido (ex: nome@gmail.com)"); return; }
    if (!password.trim()) { setError("Digite uma senha"); return; }
    setError("");
    onRegistered(name, email);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Pressable onPress={onBack} style={styles.back}>
        <Text style={[styles.backText, { color: theme.green }]}>↩</Text>
      </Pressable>

      <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
      <Text style={[styles.title, { color: theme.green }]}>Crie uma conta{"\n"}nova</Text>

      {[["Nome", name, setName, false], ["E-mail", email, setEmail, false], ["Senha", password, setPassword, true]].map(
        ([placeholder, value, setter, secure]) => (
          <TextInput
            key={placeholder}
            value={value}
            onChangeText={(v) => { setter(v); setError(""); }}
            placeholder={placeholder}
            placeholderTextColor={theme.muted}
            secureTextEntry={secure}
            autoCapitalize={placeholder === "E-mail" ? "none" : "words"}
            keyboardType={placeholder === "E-mail" ? "email-address" : "default"}
            style={[styles.input, { backgroundColor: theme.mint, color: theme.text }]}
          />
        )
      )}

      {error ? <Text style={[styles.error, { color: theme.red }]}>{error}</Text> : null}

      <Pressable style={[styles.button, { backgroundColor: theme.green }]} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 28 },
  back: { alignSelf: "flex-start", marginBottom: 8 },
  backText: { fontSize: 30 },
  logo: { width: 120, height: 120, resizeMode: "contain" },
  title: { fontSize: 22, fontWeight: "800", textAlign: "center", marginBottom: 20 },
  input: {
    width: "100%",
    height: 46,
    borderRadius: 24,
    paddingHorizontal: 18,
    marginBottom: 12
  },
  error: { fontSize: 12, marginBottom: 8, alignSelf: "flex-start" },
  button: {
    width: "100%",
    height: 46,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4
  },
  buttonText: { color: "#fff", fontWeight: "700" }
});
