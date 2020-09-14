import React from "react";
import { View, StyleSheet, Button } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Button
        title="Go to Component Screen"
        onPress={() => props.navigation.navigate("Component")}
      />
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => props.navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="Go to Square Screen Reducer"
        onPress={() => props.navigation.navigate("Square2")}
      />
      <Button
        title="Go to Square Screen Reducer Community Convention"
        onPress={() => props.navigation.navigate("Square3")}
      />
      <Button
        title="Go to Counter Screen Reducer"
        onPress={() => props.navigation.navigate("Counter2")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => props.navigation.navigate("Text")}
      />
      <Button
        title="Go to Text Password Screen"
        onPress={() => props.navigation.navigate("Text2")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
