import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Form} from '@unform/mobile';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useAuth} from '../../../../contexts/authContext';
import {validateAddService} from '../../../../backend/validations';
import {formatDate, formatTime} from './formatDateTime';
import ToastDefault from '../../../toasts';
import {CreateService} from '../../../../backend/firebase/addServiceFB';
import {LottieLoading} from '../../../lottieLoading';
import ServiceLottie from '../../../../assets/serviceLottie.json';
import {
  Container,
  ButtonIcon,
  TitleHeaderLight,
  ButtonLight,
  TextButtonLight,
} from '../../../stylesShared';

import {
  HeaderProfile,
  FormAddService,
  ButtonDateTime,
  SuportDateTime,
  MediumText,
  ViewPicker,
  PickerLocal,
  ViewPickerLocal,
  TextFooter,
  PickerStyled,
  ButtonIconAddress,
  InputPrice,
  InputDescription,
  ScrollBlue,
} from './styles';
import {Alert} from 'react-native';

export default function AddService({navigation}) {
  const {user} = useAuth();
  const [modalLoading, setModalLoading] = useState(false);
  const formDescriptionRef = useRef(null);
  const formPriceRef = useRef(null);
  const userAddresses = user.addresses;
  const [fieldIndex, setFieldIndex] = useState(0);
  const [subFieldIndex, setSubFieldIndex] = useState(0);
  const [specificIndex, setSpecificIndex] = useState(0);
  const [addressIndex, setAddressIndex] = useState(0);
  const [subFields, setSubFields] = useState([]);
  const [specifics, setSpecifics] = useState([]);
  let descriptionData;
  let priceData;
  let addresses = [];
  let count = 0;
  userAddresses.forEach((address) => {
    addresses.push(address._data);
    addresses[count].id = userAddresses[count]._ref._documentPath._parts[3];
    count = count + 1;
  });

  useEffect(() => {
    setSubFields(
      optionsPicker[fieldIndex].subField.map((item) => (
        <Picker.Item label={item.name} value={item.id} />
      )),
    );
    setSpecifics(
      optionsPicker[fieldIndex].subField[subFieldIndex].specific.map((item) => (
        <Picker.Item label={item.name} value={item.id} />
      )),
    );
  }, [fieldIndex, optionsPicker, subFieldIndex]);

  async function handleConfirm() {
    formDescriptionRef.current.submitForm();
    formPriceRef.current.submitForm();
    const data = {};
    data.description = descriptionData.description;
    data.timeStart = valueTimeStart;
    data.timeEnd = valueTimeEnd;
    data.date = valueDate;
    data.address = addresses.length;
    const responseValidate = validateAddService(data);
    if (responseValidate === undefined) {
      data.address = userAddresses[addressIndex]._data;
      setModalLoading(true);
      data.price = priceData.Price;
      data.tag =
        optionsPicker[fieldIndex].subField[subFieldIndex].specific[
          specificIndex
        ].name;
      data.field = fieldIndex;
      data.subField = subFieldIndex;
      const response = await CreateService(data);
      if (response !== undefined) {
        ToastDefault('Serviço solicitado');
        navigation.goBack();
      } else {
        ToastDefault('Erro ao solicitar serviço');
      }
      setModalLoading(false);
    } else {
      ToastDefault(responseValidate);
    }
  }

  const optionsPicker = [
    {
      id: 0,
      name: 'Doméstico',
      subField: [
        {
          id: 0,
          name: 'Limpeza',
          specific: [
            {
              id: 0,
              name: 'Limpeza de telhado',
            },
            {
              id: 1,
              name: 'Limpeza de piso',
            },
          ],
        },
        {
          id: 1,
          name: 'Culinária',
          specific: [
            {
              id: 0,
              name: 'Festas',
            },
            {
              id: 1,
              name: 'Casual',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: 'Elétricos',
      subField: [
        {
          id: 0,
          name: 'Segurança',
          specific: [
            {
              id: 0,
              name: 'Instalação de cerca elétrica',
            },
            {
              id: 1,
              name: 'Instalação de alarmes',
            },
          ],
        },
        {
          id: 1,
          name: 'Estrutura de edificações',
          specific: [
            {
              id: 0,
              name: 'Instalação de circuitos',
            },
            {
              id: 1,
              name: 'Manutenção ',
            },
          ],
        },
      ],
    },
  ];

  const [pickerDateVisible, setPickerDateVisible] = useState(false);
  const [pickerTimeStartVisible, setPickerTimeStartVisible] = useState(false);
  const [pickerTimeEndVisible, setPickerTimeEndVisible] = useState(false);

  const [valueDate, setValueDate] = useState('Data');
  const [valueTimeStart, setValueTimeStart] = useState('H. Início');
  const [valueTimeEnd, setValueTimeEnd] = useState('H. Término');

  const alertConfirmation = () =>
    Alert.alert(
      'Requisição de serviço',
      'Sua requisição de serviço foi confirmada',
      [{text: 'OK', onPress: () => navigation.navigate('HomeHirer')}],
      {cancelable: false},
    );

  function managerPickerTimeEndVisible() {
    setPickerTimeEndVisible(!pickerTimeEndVisible);
  }
  function managerPickerTimeStartVisible() {
    setPickerTimeStartVisible(!pickerTimeStartVisible);
  }
  function managerPickerDateVisible() {
    setPickerDateVisible(!pickerDateVisible);
  }

  function getValueDatePicker({Date}) {
    managerPickerDateVisible();
    setValueDate(formatDate(Date));
  }
  function getValueTimeStartPicker({Date}) {
    managerPickerTimeStartVisible();
    setValueTimeStart(formatTime(Date));
  }
  function getValueTimeEndPicker({Date}) {
    managerPickerTimeEndVisible();
    setValueTimeEnd(formatTime(Date));
  }

  return (
    <Container>
      <ScrollBlue>
        <HeaderProfile>
          <ButtonIcon onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={27} color="#fff" />
          </ButtonIcon>
          <TitleHeaderLight>Requisição de serviço</TitleHeaderLight>
          <ButtonIcon />
        </HeaderProfile>

        <FormAddService>
          <ViewPicker>
            <PickerStyled
              mode="dropdown"
              selectedValue={fieldIndex}
              onValueChange={(itemValue) => setFieldIndex(itemValue)}>
              {optionsPicker.map((item) => (
                <Picker.Item label={item.name} value={item.id} />
              ))}
            </PickerStyled>
          </ViewPicker>
          <ViewPicker>
            <PickerStyled
              mode="dropdown"
              selectedValue={subFieldIndex}
              onValueChange={(itemValue) => setSubFieldIndex(itemValue)}>
              {subFields}
            </PickerStyled>
          </ViewPicker>
          <ViewPicker>
            <PickerStyled
              mode="dropdown"
              selectedValue={specificIndex}
              onValueChange={(itemValue) => setSpecificIndex(itemValue)}>
              {specifics}
            </PickerStyled>
          </ViewPicker>
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
          <SuportDateTime>
            <ButtonDateTime onPress={managerPickerTimeStartVisible}>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>{valueTimeStart}</MediumText>
            </ButtonDateTime>
            <ButtonDateTime onPress={managerPickerTimeEndVisible}>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>{valueTimeEnd}</MediumText>
            </ButtonDateTime>
          </SuportDateTime>
          <SuportDateTime>
            <ButtonDateTime onPress={managerPickerDateVisible}>
              <Icon name="md-calendar" size={27} color="#000054" />
              <MediumText>{valueDate}</MediumText>
            </ButtonDateTime>
            <ButtonDateTime>
              <Icon2 name="currency-usd" size={27} color="#000054" />
              <Form ref={formPriceRef} onSubmit={(data) => (priceData = data)}>
                <InputPrice
                  maxLength={6}
                  placeholderTextColor="#999"
                  placeholder="00,00"
                  name="Price"
                  keyboardType="number-pad"
                />
              </Form>
            </ButtonDateTime>
          </SuportDateTime>
          <Form
            ref={formDescriptionRef}
            onSubmit={(data) => (descriptionData = data)}>
            <InputDescription
              maxLength={50}
              multiline={true}
              placeholder="Descreva seu serviço aqui..."
              name="description"
            />
          </Form>
          <ButtonLight onPress={handleConfirm}>
            <TextButtonLight>Confirmar</TextButtonLight>
          </ButtonLight>

          <DateTimePickerModal
            onCancel={managerPickerTimeStartVisible}
            isVisible={pickerTimeStartVisible}
            onConfirm={(Date) => getValueTimeStartPicker({Date})}
            mode={'time'}
          />
          <DateTimePickerModal
            onCancel={managerPickerTimeEndVisible}
            isVisible={pickerTimeEndVisible}
            onConfirm={(Date) => getValueTimeEndPicker({Date})}
            mode={'time'}
          />
          <DateTimePickerModal
            onCancel={managerPickerDateVisible}
            onConfirm={(Date) => getValueDatePicker({Date})}
            isVisible={pickerDateVisible}
            mode={'date'}
          />
          <TextFooter>Para orçamentar deixe o preço em branco*⠀</TextFooter>
        </FormAddService>
      </ScrollBlue>
      <LottieLoading visible={modalLoading} source={ServiceLottie} size={30} />
    </Container>
  );
}
