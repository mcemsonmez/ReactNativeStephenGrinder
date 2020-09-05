import React from "react";
import { View, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Button
        title="Go to Component Screen"
        onPress={() => props.navigation.navigate("Component")} />
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")} />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Images")} />
      <Button
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate("Counter")} />
      <Button
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate("Color")} />
      <Button
        title="Go to Square Screen"
        onPress={() => props.navigation.navigate("Square")} />
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
