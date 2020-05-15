import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonLigth, TextButtonLigth} from '../../stylesGlobal';
import {Divider} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
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
} from './styles';

const h = Dimensions.get('window').height / 100;
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
      <TextDescription multiline={true} autoCorrect={false}>
        {service.Description}{' '}
      </TextDescription>
      <ButtonLigth>
        <TextButtonLigth>Aceitar serviço</TextButtonLigth>
      </ButtonLigth>
      <ViewPrice style={styles.Value}>
        <Icon name="credit-card" size={22} color="#000084" />
        <TextDetails>${service.Price}</TextDetails>
      </ViewPrice>
      <Divider style={styles.Divider} />
    </ViewRequest>
  );
}

const styles = StyleSheet.create({
  Divider: {
    height: 2,
    elevation: 1,
    marginBottom: h * 5,
    marginTop: h * 2,
    backgroundColor: '#999',
    width: '100%',
  },
});
