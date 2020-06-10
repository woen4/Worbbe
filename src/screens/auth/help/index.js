import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import {createHelpDoc} from '../../../backend/firebase/helpFB';
import {validateHelp} from '../../../backend/validations';
import ToastDefault from '../../toasts';
import LottieView from 'lottie-react-native';
import send from '../../../assets/send.json';
import {
  TitleHeader,
  Header,
  ButtonIcon,
  Container,
  wh,
} from '../../stylesShared';

import {KeyboardAvoidingView} from 'react-native';
import {Labels, InputTitle, InputDescription} from './styles';

export default function Help({navigation}) {
  const formRef = useRef(null);
  const [disableSend, setDisableSend] = useState(false);
  let anim = useRef(null);
  function handleSend(data) {
    if (validateHelp(data) === true) {
      anim.play();
      ToastDefault(createHelpDoc(data));
      setDisableSend(true);
      setTimeout(function () {
        anim.pause();
      }, 2500);
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
        <ButtonIcon
          disabled={disableSend}
          onPress={() => formRef.current.submitForm()}>
          <LottieView
            ref={(animation) => {
              anim = animation;
            }}
            style={{width: wh * 10, height: wh * 10}}
            source={send}
          />
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
