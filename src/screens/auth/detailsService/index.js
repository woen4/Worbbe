import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../unform/input';
import {Form} from '@unform/mobile';
import foto from '../../../assets/foto.jpg';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
  MediumText,
  w,
  ViewCenter,
} from '../../stylesShared';
import {
  ContainerDetails,
  ViewInput,
  ViewRow,
  ViewDateTime,
  SuportDateTime,
  TextDescription,
  MarginPhoto,
  PhotoHired,
} from './styles';
import {StyleSheet, ScrollView} from 'react-native';

export default function DetailsService({navigation}) {
  return (
    <Container>
      <ScrollView>
        <Header>
          <ButtonIcon onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={28} color="#000084" />
          </ButtonIcon>

          <TitleHeader>Detalhes do serviço</TitleHeader>

          <ButtonIcon />
        </Header>
        <ContainerDetails>
          <MediumText>Limpeza pós-obra</MediumText>
          <SmallText>Domésticos > Limpeza</SmallText>
          <ViewCenter>
            <MarginPhoto>
              <PhotoHired style={{resizeMode: 'contain'}} source={foto} />
            </MarginPhoto>
          </ViewCenter>
          <Form>
            <ViewInput>
              <SmallText>Nome do cliente:</SmallText>
              <Input style={styles.input} name="complement">
                Luiz Eduardo
              </Input>
            </ViewInput>
            <ViewInput>
              <SmallText>Nome do profissional:</SmallText>
              <Input style={styles.input} name="complement">
                Kaio Woen
              </Input>
            </ViewInput>
            <ViewRow>
              <ViewInput>
                <SmallText>Local:</SmallText>
                <Input style={styles.inputReference} name="complement">
                  Rua Ângelo Quadros, 619
                </Input>
              </ViewInput>
              <ViewInput>
                <SmallText>Preço:</SmallText>
                <Input
                  style={styles.inputNumber}
                  editable={false}
                  name="complement">
                  Orçamentado
                </Input>
              </ViewInput>
            </ViewRow>
          </Form>
          <ViewInput>
            <SmallText>Descrição:</SmallText>
            <TextDescription multiline={true} autoCorrect={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit magna eget enim pretium, ac facilisis arcu facilisis.
              Curabitur consectetur turpis vel massa eleifend aliquam. Vivamus
              porttitor dui in diam hendrerit lacinia.{' '}
            </TextDescription>
          </ViewInput>
          <SuportDateTime>
            <ViewDateTime style={{elevation: 10}}>
              <Icon name="md-calendar" size={27} color="#000054" />
              <MediumText>03/05/20</MediumText>
            </ViewDateTime>
            <ViewDateTime style={{elevation: 10}}>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>15:00 - 17:00</MediumText>
            </ViewDateTime>
          </SuportDateTime>
        </ContainerDetails>
      </ScrollView>
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
    width: w * 55,
    borderBottomWidth: 2,
    borderColor: '#000084',
    color: '#000054',
  },
  inputNumber: {
    width: w * 25,
    borderBottomWidth: 2,
    borderColor: '#000084',
    color: '#000054',
  },
  button: {
    marginTop: '10%',
  },
});
/*
const alertConfirmation = () =>
    Alert.alert(
      '',
      'Realizar cadastro como:',
      [
        {
          text: 'Profissional',
          onPress: () => navigation.navigate('RegisterHired'),
        },
        {
          text: 'Cliente',
          onPress: () => navigation.navigate('RegisterHirer'),
          style: 'cancel',
        },
        ,
      ],
      {cancelable: true},
    );
*/
