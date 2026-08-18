import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import { occurrences } from "../data/mock";
import { colors } from "../styles/colors";

const BAR_COLORS = {
  baixa: "#75D856",
  media: "#FF7E38",
  alta:  "#FF463D",
};

function VegetationChart({ item, theme }) {
  const bars = [
    { label: "Baixa  (h < 10 cm)", value: item.levels.baixa, color: BAR_COLORS.baixa },
    { label: "Média  (10–30 cm)",  value: item.levels.media, color: BAR_COLORS.media },
    { label: "Alta   (> 30 cm)",   value: item.levels.alta,  color: BAR_COLORS.alta  },
  ];

  return (
    <View style={[styles.chart, { backgroundColor: theme.background, borderColor: theme.border }]}>
      <Text style={[styles.chartTitle, { color: theme.text }]}>
        Distribuição de altura — {item.local}
      </Text>

      {bars.map(({ label, value, color }) => (
        <View key={label} style={styles.barRow}>
          <Text style={[styles.barLabel, { color: theme.text }]}>{label}</Text>
          <View style={[styles.barTrack, { backgroundColor: theme.mint }]}>
            <View style={[styles.barFill, { width: `${value}%`, backgroundColor: color }]} />
          </View>
          <Text style={[styles.barPct, { color: theme.text }]}>{value}%</Text>
        </View>
      ))}

      <View style={styles.statusRow}>
        <View style={[styles.statusBadge, { backgroundColor: item.color }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={[styles.statusNote, { color: theme.muted }]}>
          Vegetação atual: {item.vegetation}
        </Text>
      </View>
    </View>
  );
}

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

          <VegetationChart item={item} theme={theme} />

          <View style={styles.dots}>
            {occurrences.map((_, i) => (
              <View key={i} style={[styles.dot, { backgroundColor: i === index ? theme.green : "#AAA" }]} />
            ))}
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

  // Chart
  chart: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
    gap: 10,
  },
  chartTitle: { fontWeight: "700", fontSize: 12, marginBottom: 4 },
  barRow: { gap: 4 },
  barLabel: { fontSize: 11, fontWeight: "600" },
  barTrack: {
    height: 18,
    borderRadius: 9,
    overflow: "hidden",
    width: "100%",
  },
  barFill: {
    height: "100%",
    borderRadius: 9,
  },
  barPct: { fontSize: 11, fontWeight: "700", alignSelf: "flex-end" },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: { color: "#fff", fontWeight: "800", fontSize: 12 },
  statusNote: { fontSize: 11 },

  dots: { flexDirection: "row", justifyContent: "center", gap: 4, marginVertical: 8 },
  dot: { width: 6, height: 6, borderRadius: 3 },
  detail: { fontWeight: "700", marginTop: 13 }
});
