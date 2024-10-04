import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Test = () => {
    return (
        <View style={styles.box1}>
            <TouchableOpacity style={styles.box2}>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        height: '100%',
    },
    box2: {
        position: 'absolute',
        top:40,
        right: 40,
        width: 100,
        height: 100,
        backgroundColor:'red',
       
    },
})