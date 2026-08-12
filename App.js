import React, { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SegurancaScreen from "./src/screens/SegurancaScreen";
import ManutencaoScreen from "./src/screens/ManutencaoScreen";
import RelatorioScreen from "./src/screens/RelatorioScreen";
import ConfiguracoesScreen from "./src/screens/ConfiguracoesScreen";
import SideMenu from "./src/components/SideMenu";
import Header from "./src/components/Header";
import { colors } from "./src/styles/colors";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = dark ? colors.dark : colors.light;

  const navigate = (next) => {
    setScreen(next);
    setMenuOpen(false);
  };

  const logout = () => navigate("login");

  if (screen === "login") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
        <LoginScreen dark={dark} onLogin={() => navigate("home")} onRegister={() => navigate("cadastro")} />
      </SafeAreaView>
    );
  }

  if (screen === "cadastro") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
        <CadastroScreen dark={dark} onBack={() => navigate("login")} onRegistered={() => navigate("home")} />
      </SafeAreaView>
    );
  }

  if (screen === "configuracoes") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
        <ConfiguracoesScreen dark={dark} onToggleDark={() => setDark((v) => !v)} onLogout={logout} />
        <View style={{ position: "absolute", top: 10, left: 12 }}>
          <Header dark={dark} title="" onMenu={() => setMenuOpen(true)} />
        </View>
        {menuOpen && <SideMenu dark={dark} onClose={() => setMenuOpen(false)} onNavigate={navigate} />}
      </SafeAreaView>
    );
  }

  const screens = {
    home: <HomeScreen dark={dark} />,
    seguranca: <SegurancaScreen dark={dark} />,
    manutencao: <ManutencaoScreen dark={dark} />,
    relatorio: <RelatorioScreen dark={dark} />
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <Header dark={dark} onMenu={() => setMenuOpen(true)} />
      <View style={{ flex: 1 }}>{screens[screen]}</View>
      {menuOpen && <SideMenu dark={dark} onClose={() => setMenuOpen(false)} onNavigate={navigate} />}
    </SafeAreaView>
  );
}
