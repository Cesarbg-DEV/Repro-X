import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Playlist = () => {
    return (
        <View style={styles.container}>
            <Text>Play List</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Playlist