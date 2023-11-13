import { StatusBar } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native'

export default function Inicio() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Escolha um Abaixo</Text>
      </View>
      <View style={styles.containerForm}>
        
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('perfil')}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Config')}>
          <Text style={styles.buttonText}>Configuração</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Tarefa')}>
          <Text style={styles.buttonText}>Exercícios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Dicas')}>
          <Text style={styles.buttonText}>Dicas</Text>
        </TouchableOpacity>
                  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080'
    
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '20%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EEEEEE'
  },
  containerForm: {
    backgroundColor: '#FBEC5D',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 25,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#006400',
    with: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonText: {
    color: '#EEEEEE',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignItems: 'center'
  },
  textRegister:{
    color: '#'
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  agreementText: {
    color: '#EEEEEE',
    fontSize: 14,
    fontWeight: 'bold',
  },

});
