import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import loginBg from '../../assets/images/login_bg.jpg';
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import colors from '../utils/colors';
import { Feather } from '@expo/vector-icons';



export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic here
  };

  return (

    <View style={styles.container}>
      <Image source={loginBg} style={styles.backgroundImage} />
      <View style={styles.overlay} />

      <StatusBar style="auto" />


      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>
            Personal Treino
          </Text>
        </View>
        <View style={styles.content}>

        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={colors.grayInputPlaceholder}
          />
          <Feather style={styles.inputIcon} name="mail" size={24} color="white" />
        </View>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={colors.grayInputPlaceholder}
          />
          <Feather style={styles.inputIcon} name="lock" size={24} color="white" />
        </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text
              style={styles.buttonText}
              onPress={() => Alert.alert('Login', `Email: ${email}, Senha: ${password}`)}
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.secButton}>
              <Text style={styles.secButtonText}>Não possui uma conta? </Text>
              <Text style={styles.secButtonText2}>Crie agora</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Montserrat_900Black',
    color: 'white',
    marginBottom: 80,
  },
  input: {
    height: 48,
    flex: 1,
    borderRadius: 20,
    color: '#FFF',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 48,
    backgroundColor: colors.grayInput,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#FFF',
  },
  inputIcon: {
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#6b3ac7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  secButtonText: {
    fontWeight: 'regular',
  },
  secButtonText2: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  secButton: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'right'
  }

});