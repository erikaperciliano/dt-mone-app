# 📱 DT Money — Mobile App

Uma aplicação mobile moderna e intuitiva para gerenciamento de finanças pessoais. O **DT Money** permite acompanhar o fluxo de caixa, registrar entradas e saídas, categorizar transações e visualizar o saldo em tempo real na palma da sua mão.

---

## 🚀 Tecnologias

O projeto foi desenvolvido utilizando a seguinte stack de tecnologias:

- **[React Native](https://reactnative.dev/)** / **[Expo](https://expo.dev/)** — Desenvolvimento mobile multiplataforma (Android & iOS)
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para segurança e produtividade no código
- **[NativeWind v4](https://www.nativewind.dev/)** — Estilização utilitária baseada em Tailwind CSS para React Native
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** — Animações e transições fluidas de alta performance
- **[Lucide React Native](https://lucide.dev/)** — Ícones vetoriais modernos e customizáveis

---

## 💻 Funcionalidades

- **Dashboard Financeiro:** Resumo visual rápido de Entradas, Saídas e Saldo Total.
- **Cadastro de Transações:** Registro de novas movimentações com título, valor, tipo (entrada/saída), categoria e data.
- **Histórico Organizado:** Listagem dinâmica e legível de todas as transações.
- **Formatadores Integrados:** Valores monetários e datas formatados automaticamente para o padrão BRL (`R$`).

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:
- **[Node.js](https://nodejs.org/pt-br/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)**
- **[Expo Go](https://expo.dev/go)** instalado no seu celular (disponível na App Store e Google Play) ou um emulador configurado (Android Studio / Xcode).

---

## 📦 Instalação e Execução

1. **Clone o repositório:**
   ```bash
       git clone [https://github.com/seu-usuario/dt-money-app.git](https://github.com/seu-usuario/dt-money-app.git)
       cd dt-money-app
  ```

2. **Instale as dependências:**
   ```bash
        npm install
        # ou
        yarn install
   ```

3. **Inicie o servidor de desenvolvimento Expo:**
   ```bash
       npx expo start
   ```

4. **Execute no dispositivo:**
   - Dispositivo Físico: Abra o aplicativo Expo Go e escaneie o QR Code exibido no terminal.
   - Emulador Android: Pressione a no terminal aberto.
   - Simulador iOS: Pressione i no terminal aberto (requer ambiente macOS).

💡 Dica: Ao alterar configurações do Babel ou Tailwind, inicie o Expo limpando o cache: npx expo start -c.


## 📸 Screenshots  

<p align="center">
  <img src="https://github.com/user-attachments/assets/74995da5-1a35-4cbc-9953-22b39d0fd1ca" alt="Login/Cadastro" width="250" />
  <img src="https://github.com/user-attachments/assets/11df9084-5872-4de6-a364-3146029280b9" alt="Edição" width="250" />
  <img src="https://github.com/user-attachments/assets/e8deef32-190e-4591-87d1-680e2fc896ff" alt="Remoção" width="250" />
   
  <img src="https://github.com/user-attachments/assets/da824693-e3a4-4903-b0a3-af237eaca639" alt="Nova Transação" width="250" />
  <img src="https://github.com/user-attachments/assets/5e5c8dd2-4b98-47b9-9731-78eaa64f7a38" alt="Transações" width="250" />
  <img src="https://github.com/user-attachments/assets/7194cb71-7498-4cc1-a876-18208dcf4699" alt="Filtros" width="250" />
</p>
