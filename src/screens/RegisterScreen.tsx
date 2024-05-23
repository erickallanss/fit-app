import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BackgroundImage from '../components/BackgroundImage';
import LogoTitle from '../components/AppTitle';
import InputWithIcon from '../components/InputWithIcon';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleRegister = () => {
        Alert.alert('Register', `Email: ${email}, Senha: ${password}, SenhaConfirmation: ${passwordConfirmation}`);
    };

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <StatusBar style="auto" />
            <View style={styles.innerContainer}>
                <LogoTitle />
                <InputWithIcon
                    IconType={Ionicons}
                    icon="person"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />
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
                <InputWithIcon
                    IconType={Feather}

                    icon="lock"
                    placeholder="Confirme a senha"
                    value={password}
                    onChangeText={setPasswordConfirmation}
                />
                <PrimaryButton onPress={handleRegister} title="Entrar" />
                <SecondaryButton mainText='Já possui conta?' clickableText='Entre agora.' onPress={() => Alert.alert('Navigate', 'Navigate to Sign Up')} />
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
