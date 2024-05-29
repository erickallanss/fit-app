import { StyleSheet, View, TouchableOpacity } from 'react-native';

type BottomBarIconProps = {
	IconType: any;
	icon: string;
	selected?: boolean;
	onPress: () => void;
};

export default function BottomBarIcon({
	IconType,
	icon,
	selected,
	onPress,
}: BottomBarIconProps) {
	let color = selected ? '#6b3ac7' : '#FFF';
	let backgroundColor = selected ? '#FFF' : 'transparent';

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.iconDiv, { backgroundColor }]}
		>
			<IconType name={icon} size={24} color={color} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	iconDiv: {
		padding: 10,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
