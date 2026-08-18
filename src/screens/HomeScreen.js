import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import DonutChart from "../components/DonutChart";
import { colors } from "../styles/colors";

const quickActions = [
  { label: "Relatório",     icon: "📊", screen: "relatorio"     },
  { label: "Manutenção",    icon: "🔧", screen: "manutencao"    },
  { label: "Segurança",     icon: "🛡️", screen: "seguranca"     },
  { label: "Configurações", icon: "⚙️", screen: "configuracoes" },
];

const chamados = [
  { text: "Trocar sensores B3, B4",            screen: "manutencao" },
  { text: "Vegetação alta no KM 008+500",      screen: "relatorio"  },
  { text: "Relatório pendente SP-021",         screen: "relatorio"  },
];

export default function HomeScreen({ dark, userName, onNavigate }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <ScreenShell dark={dark} onNavigate={() => {}}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Perfil */}
        <View style={styles.profile}>
          <View style={styles.avatar}><Text style={{ fontSize: 28 }}>👤</Text></View>
          <View>
            <Text style={[styles.name, { color: theme.text }]}>{userName || "Usuário"}</Text>
            <Text style={[styles.role, { color: theme.text }]}>Admin</Text>
          </View>
        </View>

        {/* Gráfico */}
        <DonutChart dark={dark} />

        {/* Acesso rápido */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Acesso rápido</Text>
        <View style={styles.grid}>
          {quickActions.map((action) => (
            <Pressable
              key={action.screen}
              onPress={() => onNavigate && onNavigate(action.screen)}
              style={({ pressed }) => [
                styles.gridItem,
                { backgroundColor: theme.mint, borderColor: theme.border },
                pressed && { opacity: 0.7 }
              ]}
            >
              <Text style={styles.gridIcon}>{action.icon}</Text>
              <Text style={[styles.gridLabel, { color: theme.text }]}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Chamados */}
        <View style={[styles.callout, { backgroundColor: theme.cream, borderColor: theme.border }]}>
          <Text style={[styles.calloutTitle, { color: theme.text }]}>Chamados</Text>
          {chamados.map((item) => (
            <Pressable
              key={item.text}
              onPress={() => onNavigate && onNavigate(item.screen)}
              style={({ pressed }) => pressed && { opacity: 0.6 }}
            >
              <Text style={[styles.item, { color: theme.text }]}>
                {"• "}{item.text}{"  "}
                <Text style={{ color: theme.green, textDecorationLine: "underline" }}>
                  Clique para saber mais
                </Text>
              </Text>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: { padding: 18 },
  profile: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  avatar: {
    width: 62, height: 62, borderRadius: 31,
    backgroundColor: "#EEE", alignItems: "center", justifyContent: "center",
    marginRight: 12
  },
  name: { fontSize: 20, fontWeight: "800" },
  role: { fontWeight: "700" },
  sectionTitle: { fontSize: 15, fontWeight: "800", marginBottom: 10 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 18
  },
  gridItem: {
    width: "47%",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    gap: 6
  },
  gridIcon: { fontSize: 26 },
  gridLabel: { fontWeight: "700", fontSize: 13 },
  callout: { borderWidth: 1, borderRadius: 15, padding: 12 },
  calloutTitle: { fontWeight: "800", marginBottom: 6 },
  item: { fontSize: 12, marginVertical: 3 }
});
