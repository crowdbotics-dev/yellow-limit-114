import { CheckBox } from "react-native-elements";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><CheckBox style={styles.ERKrNCbG} title="Checkbox Title" checked="fa"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ERKrNCbG: {
    width: 183,
    height: 69
  }
});
export default Untitled7;