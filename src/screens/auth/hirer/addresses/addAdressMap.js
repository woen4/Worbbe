import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, PermissionsAndroid} from 'react-native';
import {Form} from '@unform/mobile';
import {useAuth} from '../../../../contexts/authContext';
import ToastDefault from '../../../toasts';
import {linkAdress} from '../../../../backend/firebase/addressesFB';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  TextButton,
  ButtonTransparent,
  SmallText,
} from '../../../stylesShared';

import {ButtonMap, ModalNameAddress, ViewInput, InputSimple} from './styles';

export default function AddAddressMap({navigation}) {
  const formRef = useRef(null);
  const {user, refresh} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [marker, setMarker] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    Geolocation.getCurrentPosition((info) => setMarker(info.coords));
    setMarker({
      latitude: 0,
      longitude: 0,
    });
  }, []);
  const initialRegion = marker;

  async function handleDefineLocal(data) {
    if (data.nameAddress != '' && data.nameAddress != undefined) {
      if (user.addressesCount <= 6) {
        const response = await linkAdress(
          marker,
          data.nameAddress,
          user.addressesCount,
        );
        setModalVisible(false);
        ToastDefault(response);
        navigation.navigate('HomeHirer');
        refresh();
      } else {
        setModalVisible(false);
        ToastDefault('Você atingiu o número máximo de endereços cadastrados');
      }
    }
  }

  return (
    <>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Defina um local</TitleHeader>

        <ButtonIcon />
      </Header>
      <Container>
        <MapView
          showsMyLocationButton={true}
          onMapReady={() => {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
          }}
          initialRegion={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={styles.map}
          onPress={(e) => setMarker(e.nativeEvent.coordinate)}
          showsUserLocation={true}>
          <Marker pinColor="blue" coordinate={marker} />
        </MapView>
      </Container>
      <ButtonMap onPress={() => setModalVisible(true)}>
        <TextButton>Confirmar localização</TextButton>
      </ButtonMap>
      <ModalNameAddress
        backdropColor="#FFF"
        backdropOpacity={0.8}
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInTiming={1000}
        animationOutTiming={1000}
        useNativeDriver={true}
        isVisible={modalVisible}>
        <Form ref={formRef} onSubmit={handleDefineLocal}>
          <ViewInput>
            <SmallText>Apelido do endereço:</SmallText>
            <InputSimple
              placeholder="Casa, trabalho..."
              maxLength={19}
              name="nameAddress"
            />
          </ViewInput>
          <ButtonTransparent onPress={() => formRef.current.submitForm()}>
            <SmallText>OK</SmallText>
          </ButtonTransparent>
        </Form>
      </ModalNameAddress>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
