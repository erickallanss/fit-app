import { StyleSheet, View } from "react-native";
import BottomBarIcon from "./BottomBarIcon";
import logo from '../../assets/images/logo.png';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useState } from "react";



export default function BottomBar() {

  const [selectedIcon, setSelectedIcon] = useState('user')

  const handleClickProfile = () => {
    setSelectedIcon('user');
  }
  const handleClickMyEvolution = () => {
    setSelectedIcon('graph');
  }
  const handleClickStartTrain = () => {
    setSelectedIcon('fitness-center');
  }
  const handleClickAddTrain = () => {
    setSelectedIcon('diff-added');
  }
  const handleClickManageTrain = () => {
    setSelectedIcon('edit');
  }

  return (
    <View style={styles.bottomBar}>
      <BottomBarIcon IconType={Feather} icon="user" selected={selectedIcon === 'user'} onPress={handleClickProfile} />
      <BottomBarIcon IconType={Octicons} icon="graph" selected={selectedIcon === 'graph'} onPress={handleClickMyEvolution} />
      <BottomBarIcon IconType={MaterialIcons} icon="fitness-center" selected={selectedIcon === 'fitness-center'} onPress={handleClickStartTrain} />
      <BottomBarIcon IconType={Octicons} icon="diff-added" selected={selectedIcon === 'diff-added'} onPress={handleClickAddTrain} />
      <BottomBarIcon IconType={Feather} icon="edit" selected={selectedIcon === 'edit'} onPress={handleClickManageTrain} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#2C1753',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});