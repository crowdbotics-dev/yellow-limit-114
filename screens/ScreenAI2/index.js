import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const DotScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10
  }
});
export default DotScreen;