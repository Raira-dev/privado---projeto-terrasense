import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import DonutChart from "../components/DonutChart";
import { colors } from "../styles/colors";

export default function HomeScreen({ dark }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <ScreenShell dark={dark} onNavigate={() => {}}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatar}><Text style={{ fontSize: 28 }}>👤</Text></View>
          <View>
            <Text style={[styles.name, { color: theme.text }]}>Nome</Text>
            <Text style={[styles.role, { color: theme.text }]}>Admin</Text>
          </View>
        </View>

        <DonutChart dark={dark} />

        <View style={[styles.callout, { backgroundColor: theme.cream, borderColor: theme.border }]}>
          <Text style={[styles.calloutTitle, { color: theme.text }]}>Chamado</Text>
          <Text style={[styles.item, { color: theme.text }]}>• trocar sensores do... <Text style={{ textDecorationLine: "underline" }}>Clique para saber mais</Text></Text>
          <Text style={[styles.item, { color: theme.text }]}>• vegetação alta no... <Text style={{ textDecorationLine: "underline" }}>Clique para saber mais</Text></Text>
          <Text style={[styles.item, { color: theme.text }]}>• enviar dados à plan... <Text style={{ textDecorationLine: "underline" }}>Clique para saber mais</Text></Text>
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
  callout: { borderWidth: 1, borderRadius: 15, padding: 12 },
  calloutTitle: { fontWeight: "800", marginBottom: 6 },
  item: { fontSize: 12, marginVertical: 3 }
});
