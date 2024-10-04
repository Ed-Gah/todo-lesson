import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodoItem = ({task}) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.squareBox}></TouchableOpacity>
        <Text style={styles.text}>
            {task}
        </Text>
        </View>
        <View style={styles.circle}  />
    </View>
  )
}

const styles = StyleSheet.create({
    item:{backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Gets to long move to the next line
    },
    squareBox:{
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: 'green',
        opacity: 0.2,
        marginRight: 8,
        
        
    },
    text:{
        maxWidth: '80%',
    },
   
    circle:{
        width: 10,
        height: 10,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
    },
});
export default TodoItem
