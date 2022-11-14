# What is this?

A secured TODO list application with a bare React Native project and Expo local-authentication module.

- react-native with Expo
- expo-authentication
- expo-checkbox
- react-navigation

## Current App

- Authenticate user with device passcode / biometrics on app launch
- Re-authenticate user after the app is suspended (put in the background)
- Create/Update/Delete ToDos

https://user-images.githubusercontent.com/856071/195883077-5e7ebfa1-74d1-414e-b44c-dcc250cebf36.mov

## Installation

**How can I get this up and running?**

Install project dependencies:

```bash
$ npm i
```

Run on your computer with an emulator (requires [Xcode](https://developer.apple.com/download/all/?q=Xcode))

```bash
$ npm run ios
```

Run eslint:

```bash
$ npm run lint
```

## Directory Structure

**How do I find my way around this app?**

```
App.tsx (Entry point)
src/
├── components/
│  ├── atoms/ (ui atomic design atom components)
│  │  ├── button.tsx
│  │  ├── index.ts
│  │  └── text.tsx
│  └── button-input.tsx (more complex units of ui)
├── context/ (react context)
│  └── auth-context.tsx
├── navigators/ (app navigation/router)
│  └── app-navigator.tsx
├── screens/
│  ├── login-screen.tsx
│  └── todo-screen.tsx
└── theme.ts (design system constants)
```

## Development

**How do I get my dev environment set up so I can start hacking on this app?**

### Requirements:

- [NodeJS LTS](https://nodejs.org/en/)
- [git](https://git-scm.com)
- [watchman](https://facebook.github.io/watchman/docs/install#buildinstall)
- [Ruby v2.7.5](https://github.com/facebook/react-native/blob/v0.69.5/template/_ruby-version)
- [CocoPods](https://guides.cocoapods.org/using/getting-started.html) or [pod-install](https://www.npmjs.com/package/pod-install)

As well as the above development environment requirements make sure you installed the project dependencies:

```bash
$ npm i
```

## Deployment

**How do I deploy this app?**  
TODO: instructions for ESA go here...
