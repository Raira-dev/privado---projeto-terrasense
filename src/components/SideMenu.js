import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

export default function SideMenu({ dark, onNavigate, onClose }) {
  const theme = dark ? colors.dark : colors.light;

  const items = [
    ["Segurança", "seguranca"],
    ["Manutenção", "manutencao"],
    ["Relatório", "relatorio"],
    ["Configurações", "configuracoes"]
  ];

  return (
    <View style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.18)" }]}>
      <View style={[styles.menu, { backgroundColor: theme.purple }]}>
        <Pressable onPress={onClose} style={styles.close}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>

        {items.map(([label, route]) => (
          <Pressable
            key={route}
            onPress={() => onNavigate(route)}
            style={[styles.item, { backgroundColor: theme.greenLight }]}
          >
            <Text style={[styles.itemText, { color: theme.green }]}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    zIndex: 20,
    inset: 0,
    flexDirection: "row"
  },
  menu: {
    width: 210,
    minHeight: "100%",
    paddingTop: 24,
    paddingHorizontal: 14,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22
  },
  close: { alignSelf: "flex-start", padding: 5, marginBottom: 14 },
  closeText: { color: "#fff", fontSize: 38, lineHeight: 38 },
  item: {
    borderRadius: 18,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginBottom: 12
  },
  itemText: { textDecorationLine: "underline", fontSize: 15 }
});
