# Bat Signal Challenge App

## Description

Bat Signal Challenge App is a React Native application built with Expo, designed to simulate the activation of the Bat Signal. The app features a simple navigation flow and a clean UI, allowing users to trigger the Bat Signal and fill out a registration form.

## Features

- Home screen with Bat Signal activation button
- Registration (Cadastro) form with input fields and hints
- Custom reusable components (Button, InputText, ImgLogo)
- Navigation using React Navigation Stack
- Responsive and styled UI

## Folder Structure

```
.
├── App.tsx
├── app.json
├── index.d.ts
├── index.ts
├── package.json
├── tsconfig.json
├── .gitignore
├── assets/
│   ├── adaptive-icon.png
│   ├── batlogo.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── ButtonBt.tsx
│   │   │   └── ButtonBtStyles.tsx
│   │   ├── ImgLogo/
│   │   │   ├── ImgLogo.tsx
│   │   │   └── ImgLogoStyles.tsx
│   │   └── InputText/
│   │       ├── InputText.tsx
│   │       └── InputTextStyles.tsx
│   ├── routes/
│   │   ├── index.tsx
│   │   └── stack.routes.tsx
│   └── screens/
│       ├── Formulario/
│       │   ├── Formulario.tsx
│       │   └── FormularioStyles.tsx
│       └── Home/
│           ├── Home.tsx
│           └── HomeStyles.tsx
```

## Getting Started

### Prerequisites

- Node.js
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
    ```sh
    git clone <your-repo-url>
    cd desafio-bat-sinal-app
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

### Running the App

Start the development server:
```sh
npm start
```
Or use platform-specific commands:
```sh
npm run android
npm run ios
npm run web
```

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation

## License

This project is for educational purposes.

---

Feel free to customize this
