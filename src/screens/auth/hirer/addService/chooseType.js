import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-community/picker';

import {
  Container,
  TitleHeader,
  TextButtonLight,
  TextButton,
} from '../../../stylesShared';

import {
  LinearBackground,
  FormAddService,
  ViewPicker,
  PickerStyled,
  ViewButtons,
  ButtonNext,
  ButtonBack,
} from './styles';

export default function AddService({navigation}) {
  const [fieldIndex, setFieldIndex] = useState(0);
  const [subFieldIndex, setSubFieldIndex] = useState(0);
  const [specificIndex, setSpecificIndex] = useState(0);

  const [subFields, setSubFields] = useState([]);
  const [specifics, setSpecifics] = useState([]);

  useEffect(() => {
    setSubFields(
      optionsPicker[fieldIndex].subField.map((item) => (
        <Picker.Item label={item.name} value={item.id} key={item.id} />
      )),
    );
    setSpecifics(
      optionsPicker[fieldIndex].subField[subFieldIndex].specific.map((item) => (
        <Picker.Item label={item.name} value={item.id} key={item.id} />
      )),
    );
  }, [fieldIndex, subFieldIndex]);

  async function handleConfirm() {
    const data = {};
    data.tag =
      optionsPicker[fieldIndex].subField[subFieldIndex].specific[
        specificIndex
      ].name;
    data.field = fieldIndex;
    data.subField = subFieldIndex;
    navigation.navigate('DefineDetails', {data});
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

  return (
    <Container>
      <LinearBackground colors={['#000054', '#000074', '#000094']} />

      <FormAddService>
        <TitleHeader>Escolha o tipo</TitleHeader>

        <ViewPicker>
          <PickerStyled
            mode="dropdown"
            selectedValue={fieldIndex}
            onValueChange={(itemValue) => setFieldIndex(itemValue)}>
            {optionsPicker.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={item.id} />
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
        <ViewButtons>
          <ButtonBack onPress={() => navigation.goBack()}>
            <TextButtonLight>Voltar</TextButtonLight>
          </ButtonBack>
          <ButtonNext onPress={handleConfirm}>
            <TextButton>Próximo</TextButton>
          </ButtonNext>
        </ViewButtons>
      </FormAddService>
    </Container>
  );
}
