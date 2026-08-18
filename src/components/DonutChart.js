import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

// Percentuais reais — SP-021 Rodoanel Oeste (13/03/2026)
const BAIXA  = 46;  // h < 10 cm
const MEDIA  = 13;  // 10 cm ≤ h ≤ 30 cm
const ALTA   = 8;   // h > 30 cm
const NA     = 33;  // não medida

const GREEN  = "#75D856";
const ORANGE = "#FF7E38";
const RED    = "#FF463D";
const GRAY   = "#BDBDBD";

// Conic-gradient para web; fallback segmentado para native
const webChartStyle = {
  background: `conic-gradient(
    ${GREEN}  0%   ${BAIXA}%,
    ${ORANGE} ${BAIXA}% ${BAIXA + MEDIA}%,
    ${RED}    ${BAIXA + MEDIA}% ${BAIXA + MEDIA + ALTA}%,
    ${GRAY}   ${BAIXA + MEDIA + ALTA}% 100%
  )`
};

export default function DonutChart({ dark }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <View style={[styles.card, { backgroundColor: theme.cream, borderColor: theme.border }]}>
      <Text style={[styles.title, { color: theme.text }]}>Altura da vegetação</Text>
      <View style={styles.chartRow}>
        <View style={[
          styles.donut,
          Platform.OS === "web" ? webChartStyle : { backgroundColor: GRAY }
        ]}>
          <View style={[styles.hole, { backgroundColor: theme.cream }]} />
        </View>

        <View style={styles.legend}>
          <Text style={[styles.legendText, { color: theme.text }]}>🟢 Baixa {BAIXA}%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>🟠 Média {MEDIA}%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>🔴 Alta {ALTA}%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>⚪ Não medida {NA}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 18
  },
  title: { fontWeight: "700", marginBottom: 8 },
  chartRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  donut: {
    width: 132,
    height: 132,
    borderRadius: 66,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  hole: {
    width: 68,
    height: 68,
    borderRadius: 34
  },
  legend: { gap: 6, maxWidth: 150 },
  legendText: { fontSize: 11 }
});
