import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import InputSimple from '../../unform/inputSimple';
import {Form} from '@unform/mobile';
import foto from '../../../assets/foto.jpg';
import FastImage from 'react-native-fast-image';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
  MediumText,
  w,
  PhotoProfile,
} from '../../stylesShared';
import {
  ContainerDetails,
  ViewInput,
  ViewRow,
  ViewDateTime,
  SuportDateTime,
  TextDescription,
  ViewPhotos,
  MarginPhotoClient,
  MarginPhotoServer,
} from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';

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
          <ViewPhotos>
            <View>
              <MarginPhotoClient>
                <PhotoProfile
                  source={{
                    uri:
                      'https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg',
                    priority: FastImage.priority.low,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </MarginPhotoClient>
            </View>
            <View>
              <MarginPhotoServer>
                <PhotoProfile
                  source={{
                    uri:
                      'https://ocomecodafelicidade.com/wp-content/uploads/2018/12/como-parecer-uma-pessoa-bem-sucedida.jpg',
                    priority: FastImage.priority.low,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </MarginPhotoServer>
            </View>
          </ViewPhotos>
          <Form>
            <ViewInput>
              <SmallText>Nome do cliente:</SmallText>
              <InputSimple
                editable={false}
                style={styles.input}
                name="complement">
                Luiz Eduardo
              </InputSimple>
            </ViewInput>
            <ViewInput>
              <SmallText>Nome do profissional:</SmallText>
              <InputSimple
                editable={false}
                style={styles.input}
                name="complement">
                Kaio Woen
              </InputSimple>
            </ViewInput>
            <ViewRow>
              <ViewInput>
                <SmallText>Local:</SmallText>
                <InputSimple
                  editable={false}
                  style={styles.inputReference}
                  name="complement">
                  Rua Ângelo Quadros, 619
                </InputSimple>
              </ViewInput>
              <ViewInput>
                <SmallText>Preço:</SmallText>
                <InputSimple
                  style={styles.inputNumber}
                  editable={false}
                  name="complement">
                  Orçamentado
                </InputSimple>
              </ViewInput>
            </ViewRow>
          </Form>
          <ViewInput>
            <SmallText>Descrição:</SmallText>
            <TextDescription
              multiline={true}
              editable={false}
              autoCorrect={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              blandit magna eget enim pretium, ac facilisis arcu facilisis.
              Curabitur consectetur turpis vel massa eleifend aliquam. Vivamus
              porttitor dui in diam hendrerit lacinia.{' '}
            </TextDescription>
          </ViewInput>
          <SuportDateTime>
            <ViewDateTime>
              <Icon name="md-calendar" size={27} color="#000054" />
              <MediumText>03/05/20</MediumText>
            </ViewDateTime>
            <ViewDateTime>
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
