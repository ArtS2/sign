import React from "react"
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default function tarefa({data, deleteItem}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome 
                 name='trash'
                 size={20}
                 color= '#800080'
                />
            </TouchableOpacity>
            <Text>{data.item}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DED67A',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row'
    },
    button: {
        marginRight: 8
    }
})