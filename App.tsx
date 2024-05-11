import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import night from './assets/images/night.jpg';
import loginBg from './assets/images/login_bg.jpg';
import { useState } from 'react';


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic here
  };

  return (
    <View style={styles.container}>
      <Image source={loginBg} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Faça login para continuar
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.secButton}>
          <Text style={styles.secButtonText}>Não possui uma conta? </Text>
            <Text style={styles.secButtonText2}>Crie agora</Text>
        </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#6b3ac7',
    borderRadius: 8,
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