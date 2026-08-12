import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

export default function DonutChart({ dark }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <View style={[styles.card, { backgroundColor: theme.cream, borderColor: theme.border }]}>
      <Text style={[styles.title, { color: theme.text }]}>Altura da vegetação</Text>
      <View style={styles.chartRow}>
        <View style={styles.donut}>
          <View style={[styles.slice, styles.green]} />
          <View style={[styles.slice, styles.orange]} />
          <View style={[styles.slice, styles.red]} />
          <View style={[styles.slice, styles.gray]} />
          <View style={[styles.hole, { backgroundColor: theme.cream }]} />
        </View>

        <View style={styles.legend}>
          <Text style={[styles.legendText, { color: theme.text }]}>🟢 Baixa 51,2%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>🟠 Média 23,3%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>🔴 Alta 7,1%</Text>
          <Text style={[styles.legendText, { color: theme.text }]}>⚪ Não medida 18,4%</Text>
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
    position: "relative"
  },
  slice: { position: "absolute", width: "100%", height: "100%" },
  green: { backgroundColor: "#75D856", transform: [{ rotate: "-35deg" }] },
  orange: { backgroundColor: "#FF7E38", transform: [{ rotate: "115deg" }] },
  red: { backgroundColor: "#FF463D", transform: [{ rotate: "205deg" }] },
  gray: { backgroundColor: "#BDBDBD", transform: [{ rotate: "250deg" }] },
  hole: {
    position: "absolute",
    width: 68,
    height: 68,
    borderRadius: 34,
    left: 32,
    top: 32
  },
  legend: { gap: 6, maxWidth: 150 },
  legendText: { fontSize: 11 }
});
