import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../styles/colors";

export default function CadastroScreen({ dark, onBack, onRegistered }) {
  const theme = dark ? colors.dark : colors.light;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Pressable onPress={onBack} style={styles.back}>
        <Text style={[styles.backText, { color: theme.green }]}>↩</Text>
      </Pressable>

      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={[styles.title, { color: theme.green }]}>Crie uma conta{"\n"}nova</Text>

      {[["Nome", name, setName], ["E-mail", email, setEmail], ["Senha", password, setPassword]].map(
        ([placeholder, value, setter]) => (
          <TextInput
            key={placeholder}
            value={value}
            onChangeText={setter}
            placeholder={placeholder}
            placeholderTextColor={theme.muted}
            secureTextEntry={placeholder === "Senha"}
            style={[styles.input, { backgroundColor: theme.mint, color: theme.text }]}
          />
        )
      )}

      <Pressable style={[styles.button, { backgroundColor: theme.green }]} onPress={onRegistered}>
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
