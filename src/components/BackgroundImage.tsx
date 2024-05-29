import { Image, View, StyleSheet } from 'react-native';
import loginBg from '../../assets/images/login_bg.jpg';

const BackgroundImage = () => {
	return (
		<View style={styles.container}>
			<Image source={loginBg} style={styles.backgroundImage} />
			<View style={styles.overlay} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
	},
	overlay: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
});

export default BackgroundImage;
