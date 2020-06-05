import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
  MediumText,
  TextButtonLight,
  ViewCenter,
} from '../../../stylesShared';
import {
  ContainerDetails,
  ViewInput,
  ViewRow,
  Input,
  InputReference,
  InputNumber,
  ButtonSave,
} from './styles';
import {Alert} from 'react-native';

export default function AddAddressDetails({navigation}) {
  const alertConfirmation = () =>
    Alert.alert(
      'Endereço salvo',
      'Seu novo endereço foi salvo',
      [{text: 'OK', onPress: () => navigation.navigate('HomeHirer')}],
      {cancelable: false},
    );
  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Detalhes</TitleHeader>

        <ButtonIcon />
      </Header>
      <ContainerDetails>
        <MediumText>Ângelo Quadros, 619</MediumText>
        <SmallText>Montes Claros, MG</SmallText>
        <Form>
          <ViewInput>
            <SmallText>Nome Fantasia:</SmallText>
            <Input placeholder="Casa, Trabalho ..." name="complement" />
          </ViewInput>
          <ViewInput>
            <SmallText>Complemento:</SmallText>
            <Input placeholder="Apartamento/Bloco/Casa" name="complement" />
          </ViewInput>
          <ViewRow>
            <ViewInput>
              <SmallText>Ponto de refência:</SmallText>
              <InputReference placeholder="Opcional" name="complement" />
            </ViewInput>
            <ViewInput>
              <SmallText>Número:</SmallText>
              <InputNumber
                keyboardType="phone-pad"
                placeholder="Obrigatório"
                name="complement"
              />
            </ViewInput>
          </ViewRow>
        </Form>
        <ViewCenter>
          <ButtonSave onPress={alertConfirmation}>
            <TextButtonLight>Salvar Endereço</TextButtonLight>
          </ButtonSave>
        </ViewCenter>
      </ContainerDetails>
    </Container>
  );
}
