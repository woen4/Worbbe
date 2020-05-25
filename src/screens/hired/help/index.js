import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import Input from '../../components/form/input';
import {
  TitleHeader,
  Header,
  ButtonIcon,
  Container,
  s2,
  h,
  s3,
} from '../../stylesGlobal';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Labels} from './styles';

export default function Help({navigation}) {
  function handleFeedRequests() {
    navigation.navigate('FeedRequests');
  }
  function handleSubmit(data) {}
  return (
    <Container>
      <Header>
        <ButtonIcon onPress={handleFeedRequests}>
          <Icon name="ios-arrow-back" size={27} color="#000084" />
        </ButtonIcon>
        <TitleHeader>Suporte</TitleHeader>
        <ButtonIcon>
          <Icon name="ios-send" size={27} color="#000084" />
        </ButtonIcon>
      </Header>
      <Form>
        <KeyboardAvoidingView behavior="height">
          <Labels>Assunto:</Labels>
          <Input name="title" style={styles.inputTitle} />
          <Labels>Descrição:</Labels>
          <Input name="description" style={styles.inputDescription} />
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
