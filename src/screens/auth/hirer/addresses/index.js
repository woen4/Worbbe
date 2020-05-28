import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../components/unitCard/index';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
} from '../../../stylesShared';

import {FlatList} from 'react-native';

export default function Addresses({navigation}) {
  const Addresses = [
    {
      id: '123',
      Title: 'Casa',
      SubTitle: 'Ângelo Quadros, 321',
    },
    {
      id: '1234',
      Title: 'Casa',
      SubTitle: 'Ângelo Quadros, 321',
    },
    {
      id: '12345',
      Title: 'Casa',
      SubTitle: 'Ângelo Quadros, 321',
    },
  ];

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Endereços</TitleHeader>

        <ButtonIcon onPress={() => navigation.navigate('AddAddressMap')}>
          <Icon name="md-add-circle-outline" size={26} color="#000084" />
        </ButtonIcon>
      </Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Addresses}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Card card={item} />}
      />
    </Container>
  );
}
