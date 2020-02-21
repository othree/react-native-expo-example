import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, DateTime, WebView } from "react-native-expo-storybook-example";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button>
        <Text>wow</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
