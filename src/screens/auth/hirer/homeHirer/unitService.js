import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
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
  console.log(item.field);
  const navigation = useNavigation();
  const nameService = idToName(item.field, item.subField);
  const field = nameService.field;

  return (
    <ContainerService
      onPress={() => navigation.navigate('DetailsService', item)}>
      <Title>{field}</Title>
      <SmallText>-</SmallText>
      <ViewCalendar>
        <SmallText>{item.dateTime}</SmallText>
      </ViewCalendar>
      <ViewRowBetween>
        <ButtonChat onPress={() => navigation.navigate('Chat')}>
          <Icon name="ios-chatboxes" size={25} color="#000084" />
        </ButtonChat>
      </ViewRowBetween>
    </ContainerService>
  );
}

export default React.memo(UnitService);
