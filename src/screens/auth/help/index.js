import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import {createHelpDoc} from '../../../backend/firebase/index';
import {validateHelp} from '../../../backend/validations';
import ToastDefault from '../../toasts';
import {useAuth} from '../../../contexts/authContext';
import {
  TitleHeader,
  Header,
  ButtonIcon,
  Container,
  s2,
  h,
} from '../../stylesShared';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Labels, InputTitle, InputDescription} from './styles';

export default function Help({navigation}) {
  const formRef = useRef(null);
  const {user} = useAuth();
  function handleSend(data) {
    if (validateHelp(data) === true) {
      data.email = user._data.email;
      ToastDefault(createHelpDoc(data));
    } else {
      ToastDefault(validateHelp(data));
    }
  }

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={27} color="#000084" />
        </ButtonIcon>
        <TitleHeader>Suporte</TitleHeader>
        <ButtonIcon onPress={() => formRef.current.submitForm()}>
          <Icon name="ios-send" size={27} color="#000084" />
        </ButtonIcon>
      </Header>
      <Form ref={formRef} onSubmit={handleSend}>
        <KeyboardAvoidingView behavior="height">
          <Labels>Assunto:</Labels>
          <InputTitle name="title" />
          <Labels>Descrição:</Labels>
          <InputDescription name="description" />
        </KeyboardAvoidingView>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputTitle: {
    borderRadius: 40,
    height: h * 6,
    marginHorizontal: '4%',
    paddingLeft: 10,
    width: '92%',
    color: '#fff',
    fontSize: s2,
    textAlignVertical: 'top',
    marginBottom: '4%',
    fontFamily: 'SF Pro Display Bold',
    backgroundColor: 'rgba(0, 0, 131, 0.5)',
  },
  inputDescription: {
    borderRadius: 30,
    height: h * 35,
    marginHorizontal: '4%',
    paddingBottom: 1,
    paddingLeft: 10,
    textAlignVertical: 'top',
    width: '92%',
    color: '#fff',
    fontSize: s2,
    fontFamily: 'SF Pro Display Bold',
    backgroundColor: 'rgba(0, 0, 131, 0.5)',
  },
});
