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

  /* CONTROLE DA TELA
  IMPORTANTE:
  O aplicativo começa na tela de LOGIN.
  Quando clicar em "Entrar":  login -> home
  Quando clicar em "Cadastrar": login -> cadastro
  Depois de concluir o cadastro:  cadastro -> home */

  const [screen, setScreen] = useState("login");

  // NOME DO USUÁRIO LOGADO
  const [userName, setUserName] = useState("");

  // TEMA
  const [dark, setDark] = useState(false);

  // MENU LATERAL
  const [menuOpen, setMenuOpen] = useState(false);

  // TEMA ATUAL
  const theme = dark ? colors.dark : colors.light;

  // NAVEGAÇÃO
  const navigate = (nextScreen) => {
    setScreen(nextScreen);
    setMenuOpen(false);
  };

  // ALTERAR TEMA
  const toggleTheme = () => {
    setDark((current) => !current);
  };

  // TELA DE LOGIN
  if (screen === "login") {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.background,
        }}
      >

        <StatusBar
          barStyle={dark ? "light-content" : "dark-content"}
        />

        <LoginScreen
          dark={dark}
          // Clicou em ENTRAR — recebe nome e email digitados
          onLogin={(name, email) => {
            setUserName(name);
            navigate("home");
          }}
          // Clicou em CADASTRAR
          // Vai para a tela de cadastro
          onRegister={() => navigate("cadastro")}
        />
      </SafeAreaView>
    );
  }

  // TELA DE CADASTRO
  if (screen === "cadastro") {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.background,
        }}
      >

        <StatusBar
          barStyle={dark ? "light-content" : "dark-content"}
        />

        <CadastroScreen
          dark={dark}
          // Botão voltar
          onBack={() => navigate("login")}
          // Depois de concluir cadastro — recebe nome e email
          onRegistered={(name, email) => {
            setUserName(name);
            navigate("home");
          }}
        />
      </SafeAreaView>
    );
  }

  // TÍTULOS DAS PÁGINAS
  const titles = {
    home: "",
    seguranca: "Segurança",
    manutencao: "Manutenção",
    relatorio: "Relatório",
    configuracoes: "Configurações",
  };

  // CONTEÚDO DAS PÁGINAS
  const content = {

    // HOME
    home: (
      <HomeScreen
        dark={dark}
        userName={userName}
        onNavigate={navigate}
      />
    ),

    // SEGURANÇA
    seguranca: (
      <SegurancaScreen
        dark={dark}
      />
    ),

    // MANUTENÇÃO
    manutencao: (
      <ManutencaoScreen
        dark={dark}
      />
    ),

    // RELATÓRIO
    relatorio: (
      <RelatorioScreen
        dark={dark}
      />
    ),

    // CONFIGURAÇÕES
    configuracoes: (
      <ConfiguracoesScreen
        dark={dark}
        userName={userName}
        // Permite alterar o tema
        onToggleDark={toggleTheme}
        // Botão sair
        onLogout={() => navigate("login")}
      />
    ),
  };

  // APLICATIVO PRINCIPAL
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <StatusBar
        barStyle={dark ? "light-content" : "dark-content"}
      />

      {/*CABEÇALHO */}
      <Header
        dark={dark}
        title={titles[screen]}
        // Abrir menu
        onMenu={() => setMenuOpen(true)}
        // Alterar tema
        onToggleTheme={toggleTheme}
      />

      {/* CONTEÚDO DA PÁGINA */}
      <View
        style={{
          flex: 1,
        }}
      >
        {content[screen]}
      </View>

      {/*MENU LATERAL */}
      {menuOpen && (
        <SideMenu
          dark={dark}
          // Fechar menu
          onClose={() => setMenuOpen(false)}
          // Navegar para outra página
          onNavigate={navigate}
        />
      )}
    </SafeAreaView>
  );
}
