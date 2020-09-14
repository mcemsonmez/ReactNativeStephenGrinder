import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox} />
      <View style={styles.secondBox} />
      <View style={styles.thirdBox} />
    </View>
  );
};

// First Solution
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderColor: "black",
//     borderWidth: 3
//   },
//   firstBox: {
//     height: 100,
//     width: 100,
//     backgroundColor: "red"
//   },
//   secondBox: {
//     height: 100,
//     width: 100,
//     backgroundColor: "green",
//     marginTop: 100
//   },
//   thirdBox: {
//     height: 100,
//     width: 100,
//     backgroundColor: "purple"
//   }
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 3,
    height: 200
  },
  firstBox: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  },
  secondBox: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf: "flex-end" // top: 50
  },
  thirdBox: {
    height: 100,
    width: 100,
    backgroundColor: "purple"
  }
});

export default BoxScreen;
