import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import imgMap from '../../../../assets/map.png';

import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  TextButton,
} from '../../../stylesShared';

import {MapView, ButtonMap, ImageMap} from './styles';

export default function AddAddressDetails({navigation}) {
  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Localização</TitleHeader>

        <ButtonIcon />
      </Header>
      <MapView>
        <ImageMap source={imgMap} />
        <ButtonMap onPress={() => navigation.navigate('AddAddressDetails')}>
          <TextButton>Confirmar localização</TextButton>
        </ButtonMap>
      </MapView>
    </Container>
  );
}
