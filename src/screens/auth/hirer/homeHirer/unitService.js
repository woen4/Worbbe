import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {idToName} from '../../../auth/idToName';
import {
  ContainerService,
  Title,
  ViewRowBetween,
  ViewRow,
  ButtonChat,
  ViewCalendar,
} from './styles';

import {SmallText} from '../../../stylesShared';

function UnitService({item}) {
  const navigation = useNavigation();
  let price;
  if (item.price) {
    price = 'R$ ' + item.price;
  } else {
    price = 'Orçamentado';
  }

  const nameService = idToName(item.field, item.subField);
  item.field = nameService.field;
  item.subField = nameService.subField;

  return (
    <ContainerService
      onPress={() => navigation.navigate('DetailsService', item)}>
      <Title>{nameService.subField}</Title>
      <SmallText>-</SmallText>
      <ViewCalendar>
        <Icon name="calendar" size={20} color="#000084" />
        <SmallText>{item.date}</SmallText>
      </ViewCalendar>
      <ViewRowBetween>
        <SmallText>{price}</SmallText>
        <ButtonChat onPress={() => navigation.navigate('Chat')}>
          <Icon name="chat" size={25} color="#000084" />
        </ButtonChat>
      </ViewRowBetween>
    </ContainerService>
  );
}

export default React.memo(UnitService);
