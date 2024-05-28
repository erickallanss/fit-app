import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BackgroundImage from '../components/BackgroundImage';
import LogoTitle from '../components/AppTitle';
import InputWithIcon from '../components/InputWithIcon';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { Feather } from '@expo/vector-icons';

type LoginScreenNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenNavigationProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('HomePage')
  };

  const navigateToRegisterPage = () => {
    navigation.navigate('Register');
  }

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
        <SecondaryButton
          mainText='Não possui conta?'
          clickableText='Crie agora.'
          onPress={ navigateToRegisterPage}
        />
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
