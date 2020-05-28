import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  ContainerService,
  Title,
  SubTitle,
  View1,
  View2,
  View3,
  TextValues,
  ButtonHired,
} from './styles';

import {ButtonIcon} from '../../../stylesShared';

export default function Service({nameResponsible, service, icon}) {
  const navigation = useNavigation();

  return (
    <ContainerService onPress={() => navigation.navigate('DetailsService')}>
      <View1>
        <Title>{service.Type}</Title>
        <ButtonHired onPress={() => navigation.navigate('ProfileHiredPublic')}>
          <SubTitle>{nameResponsible}</SubTitle>
        </ButtonHired>
      </View1>
      <View2>
        <Icon name="calendar" size={23} color="#000084" />
        <TextValues>{service.Date}</TextValues>
        <Icon name="clock-outline" size={23} color="#000084" />
        <TextValues>{service.Time}</TextValues>
      </View2>
      <View3>
        <TextValues>{service.Price}</TextValues>
        <ButtonIcon
          style={{width: '100%'}}
          onPress={() => navigation.navigate('Chat')}>
          <Icon name={icon} size={25} color="#000084" />
        </ButtonIcon>
      </View3>
    </ContainerService>
  );
}
