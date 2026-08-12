import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenShell from "../components/ScreenShell";
import { colors } from "../styles/colors";

export default function SegurancaScreen({ dark }) {
  const theme = dark ? colors.dark : colors.light;
  const [mode, setMode] = useState("2D");

  return (
    <ScreenShell dark={dark} title="Segurança" onNavigate={() => {}}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.mapCard, { backgroundColor: theme.cream }]}>
          <View style={styles.mapHeader}>
            <Text style={[styles.mapTitle, { color: theme.text }]}>Mapa</Text>
            <Text style={{ fontSize: 20 }}>📍</Text>
          </View>

          {mode === "2D" ? (
            <View style={styles.gridMap}>
              {Array.from({ length: 96 }).map((_, i) => {
                const type = i % 17 === 0 ? "critical" : i % 9 === 0 ? "warning" : i % 5 === 0 ? "good" : "empty";
                return <View key={i} style={[styles.cell, styles[type]]} />;
              })}
            </View>
          ) : (
            <View style={styles.map3d}>
              <View style={styles.road} />
              <View style={[styles.marker, { top: 40, left: 70 }]} />
              <View style={[styles.marker, { top: 100, right: 55 }]} />
              <View style={[styles.marker, { bottom: 45, left: 90 }]} />
              <Text style={styles.roadLabel}>BR-116</Text>
            </View>
          )}

          <View style={styles.modeRow}>
            {["2D", "3D"].map((value) => (
              <Pressable key={value} onPress={() => setMode(value)}
                style={[styles.mode, { backgroundColor: mode === value ? theme.green : theme.greenLight }]}>
                <Text style={{ color: mode === value ? "#fff" : theme.green, fontWeight: "800" }}>{value}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={[styles.cameraCard, { backgroundColor: theme.cream }]}>
          <View style={styles.cameraHeader}>
            <Text style={[styles.cameraTitle, { color: theme.text }]}>Câmeras</Text>
            <Text>▣</Text>
          </View>
          <Image source={require("../../assets/road-camera.jpg")} style={styles.camera} />
          <Text style={[styles.cameraData, { color: theme.text }]}>Câmera: <Text style={{ color: "#D24A43" }}>70%</Text>   Sensor: <Text style={{ color: theme.green }}>90%</Text></Text>
        </View>
      </ScrollView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: { padding: 12 },
  mapCard: { borderRadius: 14, padding: 8, marginBottom: 14 },
  mapHeader: { flexDirection: "row", justifyContent: "space-between", padding: 5 },
  mapTitle: { fontSize: 12 },
  gridMap: {
    height: 300, flexDirection: "row", flexWrap: "wrap",
    backgroundColor: "#ECECEC", overflow: "hidden"
  },
  cell: { width: "10.416%", height: 25, borderWidth: 0.5, borderColor: "#aaa" },
  empty: { backgroundColor: "#111" },
  good: { backgroundColor: "#BFE6A5" },
  warning: { backgroundColor: "#F5D96B" },
  critical: { backgroundColor: "#ECA8A1" },
  map3d: { height: 300, backgroundColor: "#DCEAD6", position: "relative", overflow: "hidden" },
  road: {
    position: "absolute", width: 95, height: 380, backgroundColor: "#737373",
    transform: [{ rotate: "27deg" }], left: 110, top: -40, borderRadius: 45
  },
  marker: { position: "absolute", width: 18, height: 18, borderRadius: 9, backgroundColor: "#EF4C45", borderWidth: 3, borderColor: "#fff" },
  roadLabel: { position: "absolute", top: 14, left: 20, backgroundColor: "#fff", padding: 5, borderRadius: 8 },
  modeRow: { flexDirection: "row", gap: 8, marginTop: 8 },
  mode: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 14 },
  cameraCard: { borderRadius: 14, padding: 10 },
  cameraHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 7 },
  cameraTitle: { fontSize: 12 },
  camera: { width: "100%", height: 185, resizeMode: "cover", borderRadius: 8 },
  cameraData: { fontSize: 11, marginTop: 7 }
});
