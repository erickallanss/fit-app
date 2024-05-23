import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BackgroundImage from '../components/BackgroundImage';
import LogoTitle from '../components/AppTitle';
import InputWithIcon from '../components/InputWithIcon';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import colors from '../utils/colors';
import { Feather } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}, Senha: ${password}`);
  };

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <StatusBar style="auto" />
      <View style={styles.innerContainer}>
        <LogoTitle />
        <InputWithIcon
          IconType={Feather}
          icon="mail"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputWithIcon
          IconType={Feather}
          icon="lock"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <PrimaryButton onPress={handleLogin} title="Entrar" />
        <SecondaryButton mainText='Não possui conta?' clickableText='Crie agora.' onPress={() => Alert.alert('Navigate', 'Navigate to Sign Up')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
