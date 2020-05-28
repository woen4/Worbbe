import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Service from '../../components/unitService/index';
import foto from '../../../../assets/foto.jpg';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
} from '../../../stylesShared';

import {FlatList} from 'react-native';

export default function ListService({navigation}) {
  const ExamplePosts = [
    {
      id: '123',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam. ',
      Time: '16:00',
      Price: '50,00',
    },
    {
      id: '323',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam.',
      Time: '16:00',
      Price: '50,00',
    },
    {
      id: '223',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam.',
      Time: '16:00',
      Price: '50,00',
    },
  ];
  let icons = ['check-circle-outline', 'chat'];

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Agenda de serviços</TitleHeader>

        <ButtonIcon>
          <Icon name="md-funnel" size={26} color="#000084" />
        </ButtonIcon>
      </Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ExamplePosts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Service
            nameResponsible={item.NameHirer}
            service={item}
            icon="chat"
          />
        )}
      />
    </Container>
  );
}
