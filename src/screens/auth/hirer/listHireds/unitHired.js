import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ContainerCard, Title, ImageHired, ButtonBlock} from './styles';

export function Card({title, avatarUrl, remove, id}) {
  const navigation = useNavigation();
  const ID = id;

  return (
    <ContainerCard
      onPress={() => {
        navigation.navigate('Chat');
      }}>
      <ImageHired source={{uri: avatarUrl}} />
      <Title>{title}</Title>
      <ButtonBlock onPress={() => remove(ID)}>
        <Icon name="ios-close-circle-outline" size={29} color="#000084" />
      </ButtonBlock>
    </ContainerCard>
  );
}
