import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { View } from 'react-native';
import UserContextProvider from './src/contexts/UserContext';
import HomePageScreen from './src/screens/HomePageScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomePage: undefined;
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  const Stack = createStackNavigator<RootStackParamList>();

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <NavigationContainer>
        <UserContextProvider>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="HomePage" component={HomePageScreen} />
          </Stack.Navigator>
        </UserContextProvider>
      </NavigationContainer>
    );
  }
}