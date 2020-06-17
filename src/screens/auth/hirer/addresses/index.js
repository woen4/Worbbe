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

import {FlatList, PermissionsAndroid} from 'react-native';

export default function Addresses({navigation}) {
  const {user, refresh} = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [refreshList, setRefreshList] = useState(false);

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

  const remove = async (id) => {
    await deleteAddress(id);
    function filter(address) {
      if (address.id !== id) {
        return address;
      }
    }
    const newAddresses = addresses.filter(filter);
    setAddresses(newAddresses);
    refresh();
    setRefreshList(!refreshList);
  };

  function AddAddress() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    navigation.navigate('AddAddressMap');
  }

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Endereços</TitleHeader>

        <ButtonIcon onPress={() => AddAddress()}>
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
