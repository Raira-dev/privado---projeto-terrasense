# privado---projetos


TerraSense-JavaScript/
├── App.js
├── app.json
├── package.json
├── README.md
├── .gitignore
│
├── assets/
│   ├── logo.png
│   └── road-camera.jpg
│
└── src/
    ├── components/
    │   ├── DonutChart.js
    │   ├── Header.js
    │   ├── ScreenShell.js
    │   └── SideMenu.js
    │
    ├── data/
    │   └── mock.js
    │
    ├── screens/
    │   ├── LoginScreen.js
    │   ├── CadastroScreen.js
    │   ├── HomeScreen.js
    │   ├── SegurancaScreen.js
    │   ├── ManutencaoScreen.js
    │   ├── RelatorioScreen.js
    │   └── ConfiguracoesScreen.js
    │
    └── styles/
        └── colors.js






# TerraSense

Protótipo funcional do TerraSense desenvolvido em React Native + Expo + JavaScript.

## O que o app faz

- Login e cadastro de usuário
- Dashboard com indicadores de vegetação
- Menu lateral
- Mapa de segurança com níveis de risco
- Visualização 2D/3D simulada
- Monitoramento de câmera e sensores
- Solicitação de manutenção
- Relatórios por trecho
- Configurações e modo escuro
- Dados mockados para apresentação acadêmica

## Como executar

```bash
npm install
npx expo start
```

Para abrir no navegador:

```bash
npx expo start --web
```

Para limpar o cache caso necessário:

```bash
npx expo start -c
```

> O projeto foi feito sem TypeScript. Os arquivos da aplicação são `.js`.

## Observação

O mapa, sensores, gráficos e registros são simulados localmente para o protótipo. Não há backend conectado.
