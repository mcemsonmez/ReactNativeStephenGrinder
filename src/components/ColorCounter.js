import React from 'react'
import { View, Text, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDescrase }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease} />
            <Button title={`Decrease ${color}`} onPress={onDescrase}/>
        </View>
    )
}

export default ColorCounter