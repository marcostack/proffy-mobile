import React, { FunctionComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string,
}

const PageHeader:FunctionComponent<PageHeaderProps> = ({ title, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>

        <Image source={logoImg} resizeMode='contain' />
      </View>

      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
}

export default PageHeader;
