import React, { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import { oldRecords } from "../data/mock";
import { colors } from "../styles/colors";

export default function ManutencaoScreen({ dark }) {
  const theme = dark ? colors.dark : colors.light;
  const [requests, setRequests] = useState([]);

  const request = (label) => {
    setRequests((items) => [...items, label]);
    Alert.alert("Solicitação enviada", `${label} foi registrada.`);
  };

  return (
    <ScreenShell dark={dark} title="Manutenção" onNavigate={() => {}}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.forecast, { backgroundColor: theme.greenLight }]}>
          <Text style={{ color: theme.green, fontWeight: "700" }}>Previsão de corte</Text>
          <Text style={{ color: theme.green, fontWeight: "900", fontSize: 16 }}>Próximos 30 dias</Text>
          <Text style={{ color: theme.green, fontSize: 24 }}>›</Text>
        </View>

        <View style={[styles.sensor, { backgroundColor: theme.greenLight }]}>
          <Text style={{ color: theme.green, fontWeight: "700" }}>Consumo de bateria</Text>
          <Text style={{ color: theme.green, fontWeight: "800" }}>Sensor: 80%</Text>
          <Text style={{ color: theme.green, fontWeight: "800" }}>Câmera: 70%</Text>
          <Text style={{ color: theme.green, fontSize: 24 }}>›</Text>
        </View>

        {["Solicitar aparar grama", "Solicitar manutenção sensor", "Solicitar manutenção câmera"].map((label) => (
          <Pressable key={label} onPress={() => request(label)}
            style={[styles.button, { backgroundColor: theme.green }]}>
            <Text style={styles.buttonText}>{label}</Text>
          </Pressable>
        ))}

        <Text style={[styles.heading, { color: theme.text }]}>Registros antigos</Text>
        <Text style={[styles.seeAll, { color: theme.text }]}>Ver tudo</Text>

        {oldRecords.map((record) => (
          <View key={record.title} style={[styles.record, { borderColor: theme.border, backgroundColor: theme.background }]}>
            <Text style={[styles.recordTitle, { color: theme.text }]}>{record.title}</Text>
            <Text style={{ color: theme.text }}>Dia {record.date}</Text>
            <Text style={{ color: theme.text }}>Responsável: {record.responsible}</Text>
            <Text style={{ color: theme.text }}>Solicitante: {record.requester}</Text>
          </View>
        ))}

        {requests.length > 0 && (
          <View style={[styles.newBox, { backgroundColor: theme.cream }]}>
            <Text style={{ color: theme.text, fontWeight: "800" }}>Solicitações nesta sessão</Text>
            {requests.map((item, index) => <Text key={`${item}-${index}`} style={{ color: theme.text }}>• {item}</Text>)}
          </View>
        )}
      </ScrollView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  forecast: { padding: 12, borderRadius: 4, marginBottom: 10, position: "relative" },
  sensor: { padding: 12, borderRadius: 4, marginBottom: 10, position: "relative" },
  button: { paddingVertical: 10, borderRadius: 18, alignItems: "center", marginBottom: 9 },
  buttonText: { color: "#fff", fontWeight: "800" },
  heading: { fontSize: 18, fontWeight: "900", marginTop: 12 },
  seeAll: { position: "absolute", right: 18, marginTop: 16, fontSize: 9 },
  record: { borderWidth: 1, borderRadius: 13, padding: 10, marginTop: 10 },
  recordTitle: { fontWeight: "800" },
  newBox: { padding: 12, borderRadius: 12, marginTop: 12 }
});
