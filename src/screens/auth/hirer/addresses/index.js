import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../components/unitCard/index';
import {useAuth} from '../../../../contexts/authContext';
import {deleteAddress} from '../../../../backend/firebase/addressesFB';
import GPSimage from '../../../../assets/GPSimage.png';
import LottieView from 'lottie-react-native';
import {TextEmpty1, TextEmpty2} from './styles';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  w,
  h,
} from '../../../stylesShared';

import {FlatList, PermissionsAndroid, Image} from 'react-native';

export default function Addresses({navigation}) {
  const {addressesHirer, getAddresses} = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  console.log(addressesHirer);
  useEffect(() => {
    setAddresses(addressesHirer);
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

    setRefreshList(!refreshList);
    await getAddresses();
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
        ListEmptyComponent={EmptyComponent()}
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

function EmptyComponent() {
  return (
    <>
      <TextEmpty1>Defina um endereço{'\n'}agora</TextEmpty1>
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          width: w * 80,
          height: h * 80,
        }}
        source={GPSimage}
        autoPlay
        loop
      />
      <TextEmpty2>E peça já seus{'\n'} serviços</TextEmpty2>
    </>
  );
}
