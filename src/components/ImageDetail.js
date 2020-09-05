import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = props => {
    return <View>
        <Image source={props.imageSource} style={{ width: "100%" }} />
        <Text style={styles.textStyle}>{props.title}</Text>
        <Text style={styles.textUnderStyle}>Image Score - {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: -40,
        color: "white",
    },
    textUnderStyle: {
        color: "white"
    }
})

export default ImageDetail