import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {idToName} from '../../idToName';
import {ButtonLight, TextButtonLight} from '../../../stylesShared';
import {
  ViewRequest,
  ViewDetails,
  TypeService,
  NameHirer,
  PhotoHirer,
  TextDetails,
  TextDescription,
  ViewRow,
} from './styles';

export default function request({service, acceptRequest}) {
  const date = service.dateTime.substring(0, 8);
  const time = service.dateTime.substring(14, 19);
  const names = idToName(service.field, service.subField);

  return (
    <ViewRequest>
      <TypeService>{names.subField}</TypeService>
      <NameHirer>{service.nameHirer}</NameHirer>
      <PhotoHirer source={{uri: service.avatarHirer}} />
      <ViewDetails>
        <ViewRow>
          <Icon name="map-marker-distance" size={25} color="#000084" />
          <TextDetails>00</TextDetails>
        </ViewRow>
        <ViewRow>
          <Icon name="calendar" size={24} color="#000084" />
          <TextDetails>{date}</TextDetails>
        </ViewRow>
        <ViewRow>
          <Icon name="timer" size={22} color="#000084" />
          <TextDetails>{time}</TextDetails>
        </ViewRow>
      </ViewDetails>
      <TextDescription multiline={true} autoCorrect={true}>
        {service.description}{' '}
      </TextDescription>
      <ButtonLight
        onPress={() => {
          acceptRequest(service.serviceID);
        }}>
        <TextButtonLight>Aceitar serviço</TextButtonLight>
      </ButtonLight>
    </ViewRequest>
  );
}
