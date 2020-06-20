import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import AntiBotModal from '../../../antiBot/index';
import {Form} from '@unform/mobile';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useAuth} from '../../../../contexts/authContext';
import {validateAddService} from '../../../../backend/validations';
import ToastDefault from '../../../toasts';
import {CreateService} from '../../../../backend/firebase/addServiceFB';
import {LottieLoading} from '../../../lottieLoading';
import ServiceLottie from '../../../../assets/serviceLottie.json';

import {
  FormAddService,
  ViewPickerLocal,
  PickerLocal,
  PickerStyled,
  ButtonIconAddress,
  InputDescription,
  LinearBackground,
  ViewButtons,
  ButtonBack,
  MediumText,
  ButtonNext,
} from './styles';

import {
  Container,
  TitleHeader,
  TextButtonLight,
  TextButton,
} from '../../../stylesShared';

export default function DefineDetails({route, navigation}) {
  const {user, getAddresses} = useAuth();
  const [modalBot, setModalBot] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [valueDateTime, setValueDateTime] = useState('Data e horário');
  const indexes = route.params;
  let description;

  const confirmBot = async () => {
    formRef.current.submitForm();
    const data = {};
    setModalBot(false);
    data.nameHirer = user.name;
    data.location = addresses[addressIndex].coordinates;
    data.tag = indexes.data.tag;
    data.field = indexes.data.field;
    data.subField = indexes.data.subField;
    data.description = description;
    data.dateTime = valueDateTime;
    const response = await CreateService(data);
    if (response === undefined) {
      ToastDefault('Serviço solicitado');
      navigation.navigate('HomeHirer');
    } else {
      ToastDefault(response);
    }
  };

  const formRef = useRef(null);

  async function handleConfirm() {
    const data = {};
    formRef.current.submitForm();
    data.description = description;
    data.dateTime = valueDateTime;
    data.location = addresses.length;
    const responseValidate = validateAddService(data);
    if (responseValidate === undefined) {
      setModalBot(true);
    } else {
      ToastDefault(responseValidate);
    }
  }

  function getValuePicker({Date}) {
    setPickerVisible(!pickerVisible);
    setValueDateTime(formatDate(Date));
  }
  const [addresses, setAddresses] = useState([]);
  async function defineAddresses() {
    const array = await getAddresses();
    setAddresses(array);
  }
  useEffect(() => {
    defineAddresses();
  }, []);

  const [addressIndex, setAddressIndex] = useState(0);

  return (
    <Container>
      <LinearBackground colors={['#000054', '#000074', '#000094']} />
      <FormAddService>
        <TitleHeader>Defina os detalhes</TitleHeader>
        <ViewPickerLocal>
          <MediumText>{valueDateTime}</MediumText>

          <ButtonIconAddress onPress={() => setPickerVisible(!pickerVisible)}>
            <Icon name="ios-calendar" size={27} color="#000054" />
          </ButtonIconAddress>
        </ViewPickerLocal>
        <ViewPickerLocal>
          <PickerLocal>
            <PickerStyled
              mode="dropdown"
              selectedValue={addressIndex}
              onValueChange={(itemValue) => setAddressIndex(itemValue)}>
              {addresses.map((item) => (
                <Picker.Item label={item.name} value={item.id} />
              ))}
            </PickerStyled>
          </PickerLocal>
          <ButtonIconAddress
            onPress={() => navigation.navigate('AddAddressMap')}>
            <Icon2 name="map-marker-plus" size={27} color="#000054" />
          </ButtonIconAddress>
        </ViewPickerLocal>
        <Form
          ref={formRef}
          onSubmit={(data) => (description = data.description)}>
          <InputDescription
            maxLength={50}
            multiline={true}
            placeholder="Descreva seu serviço aqui..."
            name="description"
          />
        </Form>
        <ViewButtons>
          <ButtonBack
            onPress={() => {
              navigation.goBack();
            }}>
            <TextButtonLight>Voltar</TextButtonLight>
          </ButtonBack>
          <ButtonNext onPress={() => handleConfirm()}>
            <TextButton>Confirmar</TextButton>
          </ButtonNext>
        </ViewButtons>
        <DateTimePickerModal
          onCancel={() => setPickerVisible(!pickerVisible)}
          isVisible={pickerVisible}
          onConfirm={(Date) => getValuePicker({Date})}
          mode={'datetime'}
        />
      </FormAddService>
      <AntiBotModal visible={modalBot} confirmBot={confirmBot} />
    </Container>
  );
}

function formatDate(Date) {
  let hours = Date.getHours();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (hours > 0 && hours < 6) {
    ToastDefault(hours + ' da manhã?');
  }
  let minutes = Date.getUTCMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  const time = hours + ':' + minutes;

  let day = Date.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  let month = Date.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  const fullYear = Date.getYear() + '';
  const year = fullYear.slice(1, 3);
  const date = day + '/' + month + '/' + year + '  às  ' + time;
  return date;
}
