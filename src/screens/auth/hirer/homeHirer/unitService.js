import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  ContainerService,
  Title,
  ViewRowBetween,
  ViewRow,
  ButtonChat,
} from './styles';

import {SmallText} from '../../../stylesShared';

export default function UnitService({nameResponsible, service, icon}) {
  const navigation = useNavigation();

  return (
    <ContainerService onPress={() => navigation.navigate('DetailsService')}>
      <Title>Limpeza</Title>
      <SmallText>Kaio Woen</SmallText>
      <ViewRowBetween>
        <ViewRow>
          <Icon name="calendar" size={20} color="#000084" />
          <SmallText>15/06/20</SmallText>
        </ViewRow>
        <ViewRow>
          <Icon name="clock-outline" size={20} color="#000084" />
          <SmallText>15:00</SmallText>
        </ViewRow>
      </ViewRowBetween>
      <ViewRowBetween>
        <SmallText>Orçamentado</SmallText>
        <ButtonChat onPress={() => navigation.navigate('Chat')}>
          <Icon name="chat" size={25} color="#000084" />
        </ButtonChat>
      </ViewRowBetween>
    </ContainerService>
  );
}
