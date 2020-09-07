import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
};

const CounterScreen_Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: -1 })}
      />
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen_Reducer;
