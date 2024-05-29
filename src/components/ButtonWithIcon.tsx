import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonWithIconProps {
	IconType: any;
	icon: any;
	title: any;
	onPress: () => void;
}

const ButtonWithIcon = ({
	IconType,
	icon,
	title,
	onPress,
}: ButtonWithIconProps) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<IconType style={styles.icon} name={icon} size={24} color="white" />
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '80%',
		height: 55,
		backgroundColor: '#6b3ac7',
		borderRadius: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 10,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
	icon: {
		marginHorizontal: 20,
	},
});

export default ButtonWithIcon;
