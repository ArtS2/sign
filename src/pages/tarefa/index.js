import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import Tarefa from './app'

export default function app() {

  const [tarefa, setTarefa] = useState('')
  const [list, setList] = useState ([])

  function handleAdd(){
    if(tarefa === '')
    return

    const dados = {
      key: Date.now(),
      item: tarefa
    }

    setList(oldArray => [dados, ...oldArray])
    setTarefa('')
    }

    function handleDelete(item){
      let filtroItem = list.filter((tarefa)=>{
        return (tarefa.item !== item)
      })
      setList(filtroItem)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>
      <View style={styles.containerInput}>
        <TextInput 
          placeholder='Digite um Exercício...'
          style={styles.input}
          value={tarefa}
          onChangeText={(text)=> setTarefa(text)}
        />
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress = {handleAdd}
        >
          <FontAwesome name='plus' size={28} color='#EEEEEE'/>
        </TouchableOpacity>
      </View>
        <FlatList 
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <Tarefa data={item}
                     deleteItem={ ()=>handleDelete(item.item)}/>}
        style={styles.list}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DED67A'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#800080',
    marginTop: '5%',
    marginBottom: 12,
    paddingStart: '5%'
  },
  containerInput: {
    flexDirection: 'row',
    width:'100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    width: '75%',
    backgroundColor: '#EEEEEE',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#006400',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 4
  },
  list: {
    flex: 1,
    backgroundColor: '#EEEE',
    paddingStart: '5%',
    paddingEnd: '5%'
  }
});
