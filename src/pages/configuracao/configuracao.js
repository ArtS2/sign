
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Config() {

  const navigation = useNavigation()
  

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Configuração</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Alterar Nome</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.title}>Alterar Senha</Text>
        <TextInput style={styles.input}/>

        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('inicio')}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
                  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b008b'
    
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '30%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EEEEEE'
  },
  containerForm: {
    backgroundColor: '#DED67A',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
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
    alignItems: 'center'
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
