import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen_Password = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 5 ? (
        <Text>Password must be longer than 5 characters.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: "black"
  }
});

export default TextScreen_Password;
