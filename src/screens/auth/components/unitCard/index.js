import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {ContainerCard, Title, SubTitle, ViewDetails} from './styles';

import {ButtonIcon} from '../../../stylesShared';

export function Card({title, subtitle, remove, id}) {
  const navigation = useNavigation();
  const ID = id;

  return (
    <ContainerCard>
      <ViewDetails>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </ViewDetails>
      <ViewDetails>
        <ButtonIcon style={{width: '100%'}} onPress={() => remove(ID)}>
          <Icon name="delete-outline" size={29} color="#000084" />
        </ButtonIcon>
      </ViewDetails>
    </ContainerCard>
  );
}
