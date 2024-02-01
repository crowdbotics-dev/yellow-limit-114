import { FlatList } from "react-native";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><CheckBox style={styles.YrFINkQl} title="Checkbox Title"></CheckBox><FlatList style={styles.MstpXUEh} renderItem={({
        item
      }) => <View style={styles.lQdRDPVL}></View>} ItemSeparatorComponent={() => <View style={styles.FljafvmV} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  YrFINkQl: {
    width: 183,
    height: 69
  },
  MstpXUEh: {
    position: "absolute",
    width: 154,
    height: 198,
    left: 28,
    top: 99
  },
  lQdRDPVL: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  FljafvmV: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled6;