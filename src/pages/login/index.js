import { StatusBar } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, Switch, isEnabled, setIsEnabled, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Login() {

  const navigation = useNavigation()
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>{/* criar um container novo para senha e email para conseguir adcionar os icones da forma correta */}
        <View style={styles.containerUser}>
          <EvilIcons
            name='user'
            size={120}
            color='#000000'
          />
        </View>
        <View style={styles.containerUser2}>
          <Text style={styles.title}>
            <AntDesign
              name='user'
              size={25}
              color='#000000'
            />
            Email</Text></View>
        <TextInput style={styles.input} />
        <View style={styles.containerLock}>
          <Text style={styles.title}>
            <AntDesign
              name='lock'
              size={25}
              color='#000000'
            />
            Senha</Text></View>

        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('inicio')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.agreementText}>
          <Text>Ou faça login com</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'center', marginTop: 5 }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/facebook.png')} style={{ width: 35, height: 35, marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/google.png')} style={{ width: 35, height: 35, }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonRegister}
          onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.textRegister}>Não possui conta? cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerHeader: {
    marginTop: '5%',
    marginBottom: '5%',
    paddingStart: '35%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EEEEEE'
  },
  containerForm: {
    backgroundColor: '#FBEC5D',
    padding: 40,
    width:  '90%',
    borderRadius: 10,
    display: 'flex',
  },
  containerUser: {
    alignItems: 'center',
    width: '130%',
    position: 'absolute',
    top: -70,
    // backgroundColor: '#000'
  },
  containerUser2: {
    flexDirection: 'row',
  },
  containerLock: {
  },
  title: {
    alignItems: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#006400',
    with: '100%',
    borderRadius: 15,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FBEC5D',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  textRegister: {
    color: '#000000'
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  agreementText: {
    color: '#176B87',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'
  },
});
