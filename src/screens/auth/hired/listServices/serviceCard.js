import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {idToName} from '../../idToName';
import {
  ContainerService,
  Title,
  SubTitle,
  View1,
  View3,
  TextValues,
  ButtonHired,
} from './styles';

import {ButtonIcon} from '../../../stylesShared';

export default function Service({service}) {
  const serviceData = service._data;
  const navigation = useNavigation();

  const names = idToName(serviceData.field, serviceData.subField);
  return (
    <ContainerService onPress={() => navigation.navigate('DetailsService')}>
      <View1>
        <Title>{names.subField}</Title>
        <ButtonHired onPress={() => navigation.navigate('ProfileHiredPublic')}>
          <SubTitle>{serviceData.nameHirer}</SubTitle>
        </ButtonHired>
      </View1>
      <View3>
        <TextValues>{serviceData.dateTime}</TextValues>
        <ButtonIcon
          style={{width: '14%'}}
          onPress={() => navigation.navigate('Chat')}>
          <Icon name="chat" size={25} color="#000084" />
        </ButtonIcon>
      </View3>
    </ContainerService>
  );
}
