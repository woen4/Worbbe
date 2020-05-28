import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import foto from '../../../assets/foto.jpg';
import {Form} from '@unform/mobile';
import Input from '../../unform/input';

import {
  Container,
  LabelInput,
  s2,
  ViewInput,
  ButtonIcon,
  TitleHeaderLight,
  h,
  IosIconInput,
  TextButtonLight,
} from '../../stylesShared';
import LinearGradient from 'react-native-linear-gradient';
import {
  PhotoHired,
  ButtonCamera,
  MarginPhoto,
  HeaderProfile,
  ViewFormAdjusted,
  ButtonRegister,
} from './styles';
import {StyleSheet, ScrollView, Alert} from 'react-native';

export default function RegisterHired({navigation}) {
  const alertConfirmation = () =>
    Alert.alert(
      'Solicitação de cadastro realizado',
      'Ocorreu tudo bem, aguarde nosso retorno para finalizar seu cadastro.',
      [{text: 'OK', onPress: () => navigation.navigate('Login')}],
      {cancelable: false},
    );
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ViewFormAdjusted style={{elevation: 10}}>
          <Form style={{alignItems: 'center'}}>
            <LabelInput>Nome:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
              />
              <IosIconInput name="ios-contact" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Email:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="email"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <IosIconInput name="ios-mail" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Telefone:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="email"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="tel"
                textContentType="emailAddress"
                keyboardType="phone-pad"
              />
              <IosIconInput name="ios-call" size={28} color="#fff" />
            </ViewInput>
            <ButtonRegister onPress={alertConfirmation}>
              <TextButtonLight>Solicitar cadastro</TextButtonLight>
            </ButtonRegister>
          </Form>
        </ViewFormAdjusted>
        <LinearGradient
          colors={['#000054', '#000074', '#000094']}
          style={styles.ViewImage}>
          <HeaderProfile>
            <ButtonIcon onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" size={27} color="#fff" />
            </ButtonIcon>
            <TitleHeaderLight>Cadastro</TitleHeaderLight>
            <ButtonIcon />
          </HeaderProfile>
          <MarginPhoto>
            <PhotoHired source={foto} />
            <ButtonCamera>
              <Icon name="ios-camera" size={32} color="#000084" />
            </ButtonCamera>
          </MarginPhoto>
        </LinearGradient>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  ViewImage: {
    alignItems: 'center',
    height: '45%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000044',
    justifyContent: 'flex-start',
  },
  labelInput: {
    fontFamily: 'SF Pro Display Medium',
    color: '#000044',
  },
  input: {
    borderRadius: 40,
    height: h * 6,
    paddingLeft: 40,
    width: '92%',
    color: '#fff',
    fontSize: s2,
    textAlignVertical: 'top',
    marginBottom: '4%',
    fontFamily: 'SF Pro Display Bold',
    backgroundColor: 'rgba(0, 0, 131, 0.5)',
  },
});
