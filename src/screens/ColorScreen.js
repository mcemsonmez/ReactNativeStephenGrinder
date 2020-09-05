import React, { useState } from 'react'
import { View, Button, StyleSheet, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors)
    return (
        <View>
            <Button title="Add Color" onPress={() => { setColors([...colors, randomRgb()]) }} />
            <FlatList
                data={colors}
                keyExtractor={color => color}
                renderItem={({ item }) => { return <View style={{ width: 100, height: 100, backgroundColor: item }}></View> }} />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen