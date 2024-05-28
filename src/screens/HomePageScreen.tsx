import { View, Text } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
import ButtonWithIcon from "../components/ButtonWithIcon";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import BottomBar from "../components/BottomBar";
import UserTarget from "../components/UserTarget";

type HomePageScreenNavigationProps = {
    navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
}

export default function HomePageScreen({ navigation }: HomePageScreenNavigationProps) {
    const handleStartTraining = () => {
        alert('Iniciar treino');
    }

    const handleManageTraining = () => {
        alert('Gerenciar treinos');
    }

    const handleMyEvolution = () => {
        alert('Minha evolução');
    }

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <StatusBar style="auto" />
            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.userNameText}>Olá, Erick</Text>
                </View>
                <View style={styles.userTargets}>
                    <UserTarget text='Você está com' value='85kg' />
                    <UserTarget text='Seu objetivo é' value='90kg' />
                    <UserTarget text='Ampolas de Deca' value='3 und' />
                </View>
            </View>
            <View style={styles.screenButtons}>
                <ButtonWithIcon IconType={MaterialIcons} icon='fitness-center' title='Iniciar treino' onPress={handleStartTraining} />
                <ButtonWithIcon IconType={Feather} icon='edit' title='Gerenciar treinos' onPress={handleManageTraining} />
                <ButtonWithIcon IconType={Octicons} icon='graph' title='Minha evolução' onPress={handleMyEvolution} />
            </View>
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        width: '100%',
        marginTop: 50,
        color: '#FFF',
    },
    userNameText: {
        marginLeft: 30,
        fontSize: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF'
    },
    userTargets: {
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: 30,
        marginTop: 100,
    },
    targetContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    targetText: {
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'Montserrat_500Medium',
    },
    target: {
        fontSize: 26,
        marginLeft: 10,
        fontFamily: 'Montserrat_900Black',
        color: '#FFF'
    },
    screenButtons: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
});
