import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {ContainerCard, Title, SubTitle, ViewDetails} from './styles';

import {ButtonIcon} from '../../../stylesShared';

export default function Card({card}) {
  const navigation = useNavigation();

  return (
    <ContainerCard>
      <ViewDetails>
        <Title>{card.Title}</Title>
        <SubTitle>{card.SubTitle}</SubTitle>
      </ViewDetails>
      <ViewDetails>
        <ButtonIcon
          style={{width: '100%'}}
          onPress={() => navigation.navigate('Chat')}>
          <Icon name="delete-outline" size={29} color="#000084" />
        </ButtonIcon>
      </ViewDetails>
    </ContainerCard>
  );
}
