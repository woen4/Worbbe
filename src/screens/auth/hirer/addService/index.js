import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Form} from '@unform/mobile';
import Input from '../../../unform/input';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Container,
  s2,
  ButtonIcon,
  TitleHeaderLight,
  h,
  s1,
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
} from './styles';
import {StyleSheet, ScrollView, Alert} from 'react-native';

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
      [{text: 'OK', onPress: () => navigation.navigate('HomeHirer')}, ,],
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
    let day = Date.getUTCDate();
    let month = Date.getUTCMonth();
    let fullYear = Date.getFullYear() + '';
    let year = fullYear.slice(2, 4);
    let date = day + '/' + month + '/' + year;
    setValueDate(date);
  }
  function getValueTimeStartPicker({Date}) {
    managerPickerTimeStartVisible();
    let hours = Date.getUTCHours() - 3;
    let minutes = Date.getUTCMinutes();
    let timeStart = hours + ':' + minutes;
    setValueTimeStart(timeStart);
  }
  function getValueTimeEndPicker({Date}) {
    managerPickerTimeEndVisible();
    let hours = Date.getUTCHours() - 3;
    let minutes = Date.getUTCMinutes();
    let timeEnd = hours + ':' + minutes;
    setValueTimeEnd(timeEnd);
  }

  return (
    <Container>
      <ScrollView style={styles.scroll}>
        <HeaderProfile>
          <ButtonIcon onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={27} color="#fff" />
          </ButtonIcon>
          <TitleHeaderLight>Requisição de serviço</TitleHeaderLight>
          <ButtonIcon />
        </HeaderProfile>

        <FormAddService style={{elevation: 10}}>
          <ViewPicker>
            <Picker
              mode="dropdown"
              style={styles.picker}
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Área" value="área" />
              <Picker.Item label="Domésticos" value="Domésticos" />
            </Picker>
          </ViewPicker>
          <ViewPicker>
            <Picker
              mode="dropdown"
              style={styles.picker}
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Campo" value="Campo" />
              <Picker.Item label="Limpeza" value="Limpeza" />
            </Picker>
          </ViewPicker>
          <ViewPicker>
            <Picker
              mode="dropdown"
              style={styles.picker}
              selectedValue={picker}
              onValueChange={(itemValue) => setPicker(itemValue)}>
              <Picker.Item label="Sub campo" value="Sub campo" />
              <Picker.Item label="Limpeza pós obra" value="Limpeza pós obra" />
            </Picker>
          </ViewPicker>
          <ViewPickerLocal>
            <PickerLocal>
              <Picker
                mode="dropdown"
                style={styles.picker}
                selectedValue={picker}
                onValueChange={(itemValue) => setPicker(itemValue)}>
                <Picker.Item label="Local" value="Local" />
                <Picker.Item label="Casa" value="Casa" />
                <Picker.Item label="Trabalho" value="Trabalho" />
              </Picker>
            </PickerLocal>
            <ButtonIcon
              onPress={() => navigation.navigate('AddAddressMap')}
              style={styles.icon}>
              <Icon2 name="map-marker-plus" size={27} color="#000054" />
            </ButtonIcon>
          </ViewPickerLocal>
          <SuportDateTime>
            <ButtonDateTime
              onPress={managerPickerTimeStartVisible}
              style={{elevation: 10}}>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>{valueTimeStart}</MediumText>
            </ButtonDateTime>
            <ButtonDateTime
              onPress={managerPickerTimeEndVisible}
              style={{elevation: 10}}>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>{valueTimeEnd}</MediumText>
            </ButtonDateTime>
          </SuportDateTime>
          <SuportDateTime>
            <ButtonDateTime
              onPress={managerPickerDateVisible}
              style={{elevation: 10}}>
              <Icon name="md-calendar" size={27} color="#000054" />
              <MediumText>{valueDate}</MediumText>
            </ButtonDateTime>
            <ButtonDateTime style={{elevation: 10}}>
              <Icon2 name="currency-usd" size={27} color="#000054" />
              <Form>
                <Input
                  placeholderTextColor="#999"
                  placeholder="00,00"
                  style={styles.inputPrice}
                  name="Price"
                  keyboardType="number-pad"
                />
              </Form>
            </ButtonDateTime>
          </SuportDateTime>
          <Form>
            <Input
              placeholder="Descreva seu serviço aqui..."
              style={styles.inputDescription}
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
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#000054',
  },
  picker: {
    height: '100%',
    width: '100%',
  },
  icon: {
    width: '9%',
    marginLeft: '3%',
  },
  inputPrice: {
    width: '50%',
    color: '#000054',
    fontSize: s2,
    marginLeft: '10%',
    fontFamily: 'SF Pro Display Bold',
  },
  inputDescription: {
    height: h * 12,
    width: '85%',
    fontFamily: 'SF Pro Display Medium',
    fontSize: s1,
    marginTop: '5%',
    marginBottom: '7%',
    paddingHorizontal: '1.5%',
    paddingTop: '0.5%',
    textAlign: 'justify',
    textAlignVertical: 'top',
    borderRadius: 6,
    borderWidth: 0.3,
    borderColor: '#000',
  },
});
