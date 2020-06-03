import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {ButtonLight, TextButtonLight} from '../../../stylesShared';
import {
  ViewRequest,
  ViewDetails,
  ViewUnitDetails,
  TypeService,
  NameHirer,
  PhotoHirer,
  TextDetails,
  ViewPrice,
  TextDescription,
  Divider,
} from './styles';

export default function request({service}) {
  return (
    <ViewRequest>
      <TypeService>{service.Type}</TypeService>
      <NameHirer>{service.NameHirer}</NameHirer>
      <PhotoHirer source={service.PhotoHirer} />
      <ViewDetails>
        <ViewUnitDetails>
          <Icon name="map-marker-distance" size={25} color="#000084" />
          <TextDetails>{service.Distance}</TextDetails>
        </ViewUnitDetails>
        <ViewUnitDetails>
          <Icon name="calendar" size={24} color="#000084" />
          <TextDetails>{service.Date}</TextDetails>
        </ViewUnitDetails>
        <ViewUnitDetails>
          <Icon name="timer" size={22} color="#000084" />
          <TextDetails>{service.Time}</TextDetails>
        </ViewUnitDetails>
      </ViewDetails>
      <TextDescription multiline={true} autoCorrect={true}>
        {service.Description}{' '}
      </TextDescription>
      <ButtonLight>
        <TextButtonLight>Aceitar serviço</TextButtonLight>
      </ButtonLight>
      <ViewPrice>
        <Icon2 name="money-bill-wave" size={22} color="#000084" />
        <TextDetails>${service.Price}</TextDetails>
      </ViewPrice>
      <Divider />
    </ViewRequest>
  );
}
