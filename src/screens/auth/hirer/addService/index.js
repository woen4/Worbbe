import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Form} from '@unform/mobile';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
  const [picker, setPicker] = useState('');

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
    let day = Date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = Date.getUTCMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let fullYear = Date.getYear() + '';
    let year = fullYear.slice(1, 3);
    let date = day + '/' + month + '/' + year;
    setValueDate(date);
  }
  function getValueTimeStartPicker({Date}) {
    managerPickerTimeStartVisible();
    let hours = Date.getHours();
    if (hours < 10) {
      hours = '0' + hours;
    }
    let minutes = Date.getUTCMinutes();
    let timeStart = hours + ':' + minutes;
    setValueTimeStart(timeStart);
  }
  function getValueTimeEndPicker({Date}) {
    managerPickerTimeEndVisible();
    let hours = Date.getHours();
    if (hours < 10) {
      hours = '0' + hours;
    }
    let minutes = Date.getUTCMinutes();
    let timeEnd = hours + ':' + minutes;
    setValueTimeEnd(timeEnd);
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
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Área" value="área" />
              <Picker.Item label="Domésticos" value="Domésticos" />
            </PickerStyled>
          </ViewPicker>
          <ViewPicker>
            <PickerStyled
              mode="dropdown"
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Campo" value="Campo" />
              <Picker.Item label="Limpeza" value="Limpeza" />
            </PickerStyled>
          </ViewPicker>
          <ViewPicker>
            <PickerStyled
              mode="dropdown"
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Sub campo" value="Sub campo" />
              <Picker.Item label="Limpeza pós obra" value="Limpeza pós obra" />
            </PickerStyled>
          </ViewPicker>
          <ViewPickerLocal>
            <PickerLocal>
              <PickerStyled
                mode="dropdown"
                selectedValue={picker}
                onValueChange={(itemValue) => setPicker(itemValue)}>
                <Picker.Item label="Local" value="Local" />
                <Picker.Item label="Casa" value="Casa" />
                <Picker.Item label="Trabalho" value="Trabalho" />
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
              <Form>
                <InputPrice
                  maxLength={4}
                  placeholderTextColor="#999"
                  placeholder="00,00"
                  name="Price"
                  keyboardType="number-pad"
                />
              </Form>
            </ButtonDateTime>
          </SuportDateTime>
          <Form>
            <InputDescription
              placeholder="Descreva seu serviço aqui..."
              name="description"
            />
          </Form>
          <ButtonLight onPress={alertConfirmation}>
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
    </Container>
  );
}
