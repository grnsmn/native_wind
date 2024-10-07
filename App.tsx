if (__DEV__) {
  const Reactotron = require('./ReactotronConfig').default;
  Reactotron.log('Reactotron Configured');
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookUIRoot from './.ondevice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require("./.ondevice").default;
}

export default console.tron.storybookSwitcher(StorybookUIRoot)(AppEntryPoint);
