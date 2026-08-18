import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../styles/colors";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ dark, onLogin, onRegister }) {
  const theme = dark ? colors.dark : colors.light;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name.trim()) {
      setError("Digite seu nome");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Digite um e-mail válido (ex: nome@gmail.com)");
      return;
    }
    setError("");
    onLogin(name.trim(), email);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
      <Text style={[styles.welcome, { color: theme.green }]}>Bem-vindo</Text>

      <TextInput
        value={name}
        onChangeText={(v) => { setName(v); setError(""); }}
        placeholder="Nome"
        placeholderTextColor={theme.muted}
        style={[styles.input, { backgroundColor: theme.mint, color: theme.text }]}
      />
      <TextInput
        value={email}
        onChangeText={(v) => { setEmail(v); setError(""); }}
        placeholder="E-mail"
        placeholderTextColor={theme.muted}
        keyboardType="email-address"
        autoCapitalize="none"
        style={[styles.input, { backgroundColor: theme.mint, color: theme.text }]}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        placeholderTextColor={theme.muted}
        secureTextEntry
        style={[styles.input, { backgroundColor: theme.mint, color: theme.text }]}
      />

      {error ? <Text style={[styles.error, { color: theme.red }]}>{error}</Text> : null}

      <Pressable style={[styles.button, { backgroundColor: theme.green }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <Text style={[styles.or, { color: theme.text }]}>ou</Text>

      <View style={styles.socialRow}>
        <Text style={styles.social}>G</Text>
        <Text style={[styles.social, { color: "#1A73E8" }]}>▦</Text>
      </View>

      <Pressable onPress={onRegister}>
        <Text style={[styles.link, { color: theme.green }]}>
          Não tem cadastro? Clique aqui
        </Text>
      </Pressable>

      <Text style={[styles.brand, { color: theme.purple }]}>〽 motiva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingHorizontal: 32, paddingTop: 30 },
  logo: { width: 130, height: 130, resizeMode: "contain", marginBottom: 10 },
  welcome: { fontSize: 22, fontWeight: "800", marginBottom: 20 },
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4
  },
  buttonText: { color: "#fff", fontWeight: "700" },
  or: { marginVertical: 15 },
  socialRow: { flexDirection: "row", gap: 30, marginBottom: 20 },
  social: { fontSize: 26, fontWeight: "800" },
  link: { fontSize: 12, fontWeight: "700", textDecorationLine: "underline" },
  brand: { marginTop: "auto", marginBottom: 24, fontSize: 20, fontWeight: "800" }
});
