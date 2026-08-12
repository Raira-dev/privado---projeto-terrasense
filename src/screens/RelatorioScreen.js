import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import { occurrences } from "../data/mock";
import { colors } from "../styles/colors";

export default function RelatorioScreen({ dark }) {
  const theme = dark ? colors.dark : colors.light;
  const [index, setIndex] = useState(0);
  const item = occurrences[index];

  return (
    <ScreenShell dark={dark} title="Relatório" onNavigate={() => {}}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.report, { backgroundColor: theme.cream }]}>
          <View style={styles.top}>
            <Pressable onPress={() => setIndex((index - 1 + occurrences.length) % occurrences.length)}>
              <Text style={{ color: theme.text, fontSize: 28 }}>‹</Text>
            </Pressable>
            <View>
              <Text style={[styles.centerTitle, { color: theme.text }]}>Relatório</Text>
              <Text style={[styles.km, { color: theme.text }]}>KM {item.km}</Text>
            </View>
            <Pressable onPress={() => setIndex((index + 1) % occurrences.length)}>
              <Text style={{ color: theme.text, fontSize: 28 }}>›</Text>
            </Pressable>
          </View>

          <View style={styles.chart}>
            <Text style={{ color: "#fff", fontSize: 18 }}>gráfico</Text>
          </View>

          <View style={styles.dots}>
            {occurrences.map((_, i) => <View key={i} style={[styles.dot, { backgroundColor: i === index ? theme.green : "#AAA" }]} />)}
          </View>

          <Text style={[styles.detail, { color: theme.text }]}>Local: {item.local}</Text>
          <Text style={[styles.detail, { color: theme.text }]}>Status: {item.status}</Text>
          <Text style={[styles.detail, { color: theme.text }]}>Altura da vegetação: {item.vegetation}</Text>
          <Text style={[styles.detail, { color: theme.text }]}>Altura recomendada: {item.recommended}</Text>
        </View>
      </ScrollView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  report: { borderRadius: 14, padding: 12, minHeight: 520 },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  centerTitle: { textAlign: "center", fontWeight: "800" },
  km: { textAlign: "center", marginTop: 5 },
  chart: { height: 240, borderRadius: 14, backgroundColor: "#8170D4", alignItems: "center", justifyContent: "center", marginTop: 10 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 4, marginVertical: 8 },
  dot: { width: 6, height: 6, borderRadius: 3 },
  detail: { fontWeight: "700", marginTop: 13 }
});
