import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const FlatListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 20 },
        { name: 'Friend 2', age: 45 },
        { name: 'Friend 3', age: 32 },
        { name: 'Friend 4', age: 27 },
        { name: 'Friend 5', age: 53 },
        { name: 'Friend 6', age: 30 },
        { name: 'Friend 7', age: 38 },
        { name: 'Friend 8', age: 10 },
        { name: 'Friend 9', age: 84 }
    ]

    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({ item }) => <Text style={styles.textStyle}>{item.name} Age: {item.age}</Text>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 100
    },
    textStyle: {
        fontSize: 20,
        marginTop: 40,
    }
})

export default FlatListScreen