import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

export default function Header({ dark, onMenu, title }) {
  const theme = dark ? colors.dark : colors.light;

  return (
    <View style={[styles.header, { backgroundColor: theme.lavender }]}>
      <Pressable onPress={onMenu} style={styles.iconButton}>
        <Text style={[styles.menuIcon, { color: theme.text }]}>☰</Text>
      </Pressable>

      {title ? (
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      ) : (
        <View />
      )}

      <Text style={[styles.moon, { color: theme.black }]}>☾</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 76,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconButton: { padding: 8 },
  menuIcon: { fontSize: 28 },
  moon: { fontSize: 32 },
  title: { fontSize: 20, fontWeight: "700" }
});
