# What is this?

A secured TODO list application with a bare React Native project and Expo local-authentication module.

I have intentionally chosen to use useState and useContext to manage application state to demonstrate my knowledge of React core React concepts. For a large complex application I would consider using [MobX-state-tree](https://mobx-state-tree.js.org/) or [Redux-toolkit](https://redux-toolkit.js.org/).

- react-native with Expo
- expo-authentication
- expo-checkbox
- react-navigation

## Technical Decisions

**User Authentication State:** Is managed using the react context API: The API should be familiar to react developers, auth state can be accessed using a hook in any component at any depth, authenticated state does not change frequently so context performance limitations won't be an issue.

**Authentication Hook** I created a custom hook to manage the authentication flow in `src/context/auth-context.tsx` it provides a simple API for working with the auth states `useAuth: () => { isAuth, setIsAuth }` and keeps all of the authentication implementation logic in one place.

## Current App

- Authenticate user with device passcode / biometrics on app launch
- Re-authenticate user after the app is suspended (put in the background)
- Create/Update/Delete ToDos

https://user-images.githubusercontent.com/856071/201657376-3f8104da-2d03-4a98-aae7-f78be843a5dd.mp4

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

### **src/components/atoms**

following the [Atomic web design methodology](https://bradfrost.com/blog/post/atomic-web-design/#atoms) for atoms (the smallest unit elements of a design)

### **src/components**

these are more complex components, a combination of atoms and custom code combined together to form a compleat unit of UI (akin to atomic web design molecules)

## Development

**How do I get my dev environment set up so I can start hacking on this app?**

Using React Native CLI: https://reactnative.dev/docs/0.69/getting-started

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
