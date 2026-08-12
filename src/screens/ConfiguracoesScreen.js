import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

export default function ConfiguracoesScreen({ dark, onToggleDark, onLogout }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <ScrollView style={{ backgroundColor: theme.background }} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={[styles.back, { color: theme.green }]}>↩</Text>
        <Text style={[styles.title, { color: theme.text }]}>Configurações</Text>
      </View>

      <View style={[styles.search, { backgroundColor: theme.mint }]}>
        <Text style={{ color: theme.muted }}>⌕ Pesquisar configurações...</Text>
      </View>

      <View style={[styles.profile, { backgroundColor: theme.greenLight }]}>
        <View style={styles.avatar}><Text style={{ fontSize: 28 }}>👤</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.name, { color: theme.text }]}>Nome</Text>
          <Text style={[styles.name, { color: theme.text }]}>Admin</Text>
        </View>
        <Text style={{ color: theme.green, fontSize: 24 }}>✎</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "#E8D8F4" }]}>
        <Text style={{ color: theme.text }}>Idioma</Text>
        <Text style={{ color: theme.text }}>Centro de atividades</Text>
        <Text style={{ color: theme.text }}>Acessibilidade</Text>
      </View>

      <View style={[styles.box, { backgroundColor: theme.beige }]}>
        <Text style={{ color: theme.text }}>Central de ajuda</Text>
        <Text style={{ color: theme.text }}>Central de privacidade</Text>
        <Text style={{ color: theme.text }}>Termos e políticas</Text>
      </View>

      <Pressable onPress={onToggleDark} style={[styles.action, { backgroundColor: theme.cream }]}>
        <Text style={{ color: theme.text }}>☾  {dark ? "Desativar modo escuro" : "Ativar modo escuro"}</Text>
      </Pressable>

      <Pressable onPress={onLogout} style={styles.logout}>
        <Text style={{ color: theme.text, fontWeight: "800" }}>↪ Sair</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 18 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 12 },
  back: { fontSize: 28 },
  title: { fontSize: 20, fontWeight: "900" },
  search: { height: 36, borderRadius: 18, paddingHorizontal: 14, justifyContent: "center", marginBottom: 12 },
  profile: { flexDirection: "row", alignItems: "center", padding: 12, borderRadius: 12, marginBottom: 12 },
  avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: "#CCC", alignItems: "center", justifyContent: "center", marginRight: 10 },
  name: { fontWeight: "900", fontSize: 16 },
  box: { padding: 14, borderRadius: 12, marginBottom: 12, gap: 6 },
  action: { padding: 14, borderRadius: 12, marginTop: 4 },
  logout: { paddingVertical: 18 }
});
