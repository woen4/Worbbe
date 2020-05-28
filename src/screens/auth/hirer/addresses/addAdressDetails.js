import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../unform/input';
import {Form} from '@unform/mobile';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
  MediumText,
  ButtonLight,
  TextButtonLight,
  ViewCenter,
  w,
} from '../../../stylesShared';
import {ContainerDetails, ViewInput, ViewRow} from './styles';
import {StyleSheet, Alert} from 'react-native';

export default function AddAddressDetails({navigation}) {
  const alertConfirmation = () =>
    Alert.alert(
      'Endereço salvo',
      'Seu novo endereço foi salvo',
      [{text: 'OK', onPress: () => navigation.navigate('HomeHirer')}, ,],
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
            <Input
              style={styles.input}
              placeholder="Casa, Trabalho ..."
              name="complement"
            />
          </ViewInput>
          <ViewInput>
            <SmallText>Complemento:</SmallText>
            <Input
              style={styles.input}
              placeholder="Apartamento/Bloco/Casa"
              name="complement"
            />
          </ViewInput>
          <ViewRow>
            <ViewInput>
              <SmallText>Ponto de refência:</SmallText>
              <Input
                style={styles.inputReference}
                placeholder="Opcional"
                name="complement"
              />
            </ViewInput>
            <ViewInput>
              <SmallText>Número:</SmallText>
              <Input
                keyboardType="phone-pad"
                style={styles.inputNumber}
                placeholder="Obrigatório"
                name="complement"
              />
            </ViewInput>
          </ViewRow>
        </Form>
        <ViewCenter>
          <ButtonLight onPress={alertConfirmation} style={styles.button}>
            <TextButtonLight>Salvar Endereço</TextButtonLight>
          </ButtonLight>
        </ViewCenter>
      </ContainerDetails>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#000084',
    color: '#000054',
  },
  inputReference: {
    width: w * 60,
    borderBottomWidth: 2,
    borderColor: '#000084',
    color: '#000054',
  },
  inputNumber: {
    width: w * 20,
    borderBottomWidth: 2,
    borderColor: '#000084',
    color: '#000054',
  },
  button: {
    marginTop: '10%',
  },
});
