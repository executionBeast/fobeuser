This is a User Directory App [**App Download Link**](https://drive.google.com/file/d/1qHjQdThvbKgb66mZvcNlcO_zxYQqQDeT/view?usp=sharing) built with [**React Native**](https://reactnative.dev) and  bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Fobeuser App
The User Directory App is a React Native application that allows to view users with search functionality and sort the users in A-Z order. It includes one screens.
1. **Home**: View Users information with bottom nav buttons to fetch next and previous users

## Features
**1. Display User**: Avatar, name , id, email, dob, and employment is shown in minimal ui 

**2. Navigate**: There are two buttons on the bottom (prev) (next) cicking on it show users data and can navigate back and forth.

**4. Loader View**: A loading animation till the data arives from API.

**7. Responsive UI**: Optimized for different screen sizes.

## Challenges Faced
**1. Debugging React Native Version Issues**: In new release of React 0.72.0 the react-navigation packages and there dependencies were not compatible.

**2. Handling API Errors**: Handling each and every case of Internet Disconnect, No User Found, Loading The Data and showing it on conditional basis.

**3. App Freeze During Development**: Resolved App UI frequent freeze, its ui sometimes does not respond due to debugger overlay, which interfered with the UI thread.

**4. Release Build Errors**: Resolved Release build error by trying different versions and work around code fix.

# Getting Started
**Prerequisites**

Node.js (version 14 or above)
React Native CLI installed
Android Studio (for Android development)
JDK 11 or higher

## Setup Instruction
**Clone Repository**:
```bash
git clone https://github.com/executionBeast/UserDirectoryReactNativeApp.git
```

**Navigate**:
```bash
cd  fobeuser
```
**Install Dependencies**: 
```bash
npm install
```
>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

```bash
# using npm
npm start
```

## Step 2: Start your Application

Let Development Server (Metro Server) run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ 

### For Android

```bash
# using npm
npm run android

#or
npx react-native run-android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ shortly provided you have set up your emulator/simulator correctly.

