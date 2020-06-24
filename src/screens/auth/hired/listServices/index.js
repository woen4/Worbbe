import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Service from './serviceCard';
import foto from '../../../../assets/foto.jpg';
import {getListServices} from '../../../../backend/firebase/listServicesFB';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
} from '../../../stylesShared';

import {FlatList} from 'react-native';

export default function ListService({navigation}) {
  const [services, setServices] = useState([]);
  async function fillListServices() {
    const response = await getListServices();
    setServices(response);
  }
  useEffect(() => {
    fillListServices();
  }, []);

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
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Service service={item} />}
      />
    </Container>
  );
}
