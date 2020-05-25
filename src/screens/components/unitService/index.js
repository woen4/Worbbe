import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';
import {
  ContainerService,
  Title,
  SubTitle,
  View1,
  View2,
  View3,
  TextValues,
} from './styles';

import {ButtonIcon} from '../../stylesGlobal';

function Service({nameResponsible, service, icon, navigation}) {
  function handleChat() {
    navigation.navigate('Chat');
  }

  return (
    <ContainerService>
      <View1>
        <Title>{service.Type}</Title>
        <SubTitle>{nameResponsible}</SubTitle>
      </View1>
      <View2>
        <Icon name="calendar" size={23} color="#000084" />
        <TextValues>{service.Date}</TextValues>
        <Icon name="clock-outline" size={23} color="#000084" />
        <TextValues>{service.Time}</TextValues>
      </View2>
      <View3>
        <TextValues>{service.Price}</TextValues>
        <ButtonIcon style={{width: '100%'}} onPress={handleChat}>
          <Icon name={icon} size={25} color="#000084" />
        </ButtonIcon>
      </View3>
    </ContainerService>
  );
}

export default withNavigation(Service);
