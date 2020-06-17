import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import FastImage from 'react-native-fast-image';
import {useAuth} from '../../../contexts/authContext';
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
  ViewRow,
  ViewDateTime,
  SuportDateTime,
  TextDescription,
  ViewPhotos,
  MarginPhotoClient,
  MarginPhotoServer,
  ViewText,
  TextSimple,
} from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';

export default function DetailsService({route, navigation}) {
  const item = route.params;
  const {user} = useAuth();
  function handleNavigate() {
    if (user.isClient) {
      navigation.navigate('HomeHirer');
    } else {
      navigation.navigate('FeedRequests');
    }
  }

  let price;
  if (item.price) {
    price = 'R$ ' + item.price;
  } else {
    price = 'Orçamentado';
  }
  return (
    <Container>
      <ScrollView>
        <Header>
          <ButtonIcon onPress={handleNavigate}>
            <Icon name="ios-arrow-back" size={28} color="#000084" />
          </ButtonIcon>

          <TitleHeader>Detalhes do serviço</TitleHeader>

          <ButtonIcon />
        </Header>
        <ContainerDetails>
          <MediumText>{item.tag}</MediumText>
          <SmallText>
            {item.field} > {item.subField}{' '}
          </SmallText>
          <ViewPhotos>
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
            <View>
              <MarginPhotoClient>
                <PhotoProfile
                  source={{
                    uri: user.avatarUrl,
                    priority: FastImage.priority.low,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </MarginPhotoClient>
            </View>
          </ViewPhotos>
          <Form>
            <ViewText>
              <SmallText>Nome do profissional:</SmallText>
              <TextSimple style={styles.input}>Kaio Woen</TextSimple>
            </ViewText>

            <ViewText>
              <SmallText>Preço:</SmallText>
              <TextSimple>{price}</TextSimple>
            </ViewText>

            <ViewText>
              <SmallText>Nome do endereço:</SmallText>
              <TextSimple>{item.location.name}</TextSimple>
            </ViewText>
          </Form>

          <SmallText>Descrição:</SmallText>
          <TextDescription>{item.description}</TextDescription>

          <SuportDateTime>
            <ViewDateTime>
              <Icon name="md-calendar" size={27} color="#000054" />
              <MediumText>{item.date}</MediumText>
            </ViewDateTime>
            <ViewDateTime>
              <Icon name="md-time" size={27} color="#000054" />
              <MediumText>
                {item.timeStart} - {item.timeEnd}
              </MediumText>
            </ViewDateTime>
          </SuportDateTime>
        </ContainerDetails>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputReference: {
    width: w * 55,
  },
  inputNumber: {
    width: w * 25,
  },
});
