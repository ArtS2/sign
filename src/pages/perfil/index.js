import React, {useState} from 'react';
import { StyleSheet, Text, Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.user}>
          <FontAwesome name="user-circle-o" size={150} color="black" />
        </View>
        <Text style={styles.Text}>lorem ipsum</Text>
      </View>
      <View style={styles.container2}>
        {/* Aqui você pode usar a função `tarefa` se necessário */}
        {tarefa()}
      </View>
      <Modal
        animationType='slide' 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Bora malhar!?
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>
                Fechar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      {/* Envolver o texto em um componente Text */}
      <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.tochavel}
      >
        <Text>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

// Função tarefa agora está fora do escopo de Perfil
function tarefa() {
  return (
    <View>
      {/* Conteúdo da tarefa */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##8b008b',
    borderRadius: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tochavel:{
    marginTop: 100,
    backgroundColor: '#FBEC5D',

  },
  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBEC5D',
  },
  container2: {
    flex: 2,
    backgroundColor: '#FBEC5D',
  },
  user: {
    marginTop: -10,
    marginBottom: 25,
    top: 30,
  },
  Text: {
    fontSize: 20,
    position: 'relative',
  },
  modalView:{ 
    margin:20,
    backgroundColor: 'white',
    borderRadius:20,
    padding:35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
},
button: {
borderRadius:20,
padding:10,
elevation: 2,
},
buttonClose:{
backgroundColor: '#2196f3'
},
modalText: {
marginBottom:15,
textAlign: 'center',
fontWeight: 'bold'
}
});
