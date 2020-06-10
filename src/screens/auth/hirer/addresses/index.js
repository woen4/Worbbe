import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../components/unitCard/index';
import {useAuth} from '../../../../contexts/authContext';
import {deleteAddress} from '../../../../backend/firebase/addressesFB';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
} from '../../../stylesShared';

import {FlatList} from 'react-native';

export default function Addresses({navigation}) {
  const [addresses, setAddresses] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const {user} = useAuth();

  async function getAddresses() {
    const userAddresses = user.addresses;

    let arrayGet = [];
    let count = 0;
    userAddresses.forEach((address) => {
      arrayGet.push(address._data);
      arrayGet[count].id = userAddresses[count]._ref._documentPath._parts[3];
      count = count + 1;
    });
    setAddresses(arrayGet);
  }
  useEffect(() => {
    getAddresses();
  }, []);

  const remove = (id) => {
    deleteAddress(id);
    function filter(address) {
      if (address.id !== id) {
        return address;
      }
    }
    const newAddresses = addresses.filter(filter);
    setAddresses(newAddresses);
    setRefreshList(!refreshList);
  };

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
        refreshing={false}
        data={addresses}
        onRefresh={refreshList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Card title={item.name} subtitle={''} remove={remove} id={item.id} />
        )}
      />
    </Container>
  );
}
