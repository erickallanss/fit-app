import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../assets/images/logo.png';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Personal Treino</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
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
});

export default LogoTitle;