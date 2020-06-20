import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {useAuth} from '../../../../contexts/authContext';
import {idToName} from '../../idToName';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
  MediumText,
  w,
  PhotoProfile,
} from '../../../stylesShared';
import {
  ContainerDetails,
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

  const names = idToName(item.field, item.subField);

  function handleNavigate() {
    if (user.isClient) {
      navigation.navigate('HomeHirer');
    } else {
      navigation.navigate('FeedRequests');
    }
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
            {names.field} > {names.subField}{' '}
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

          <ViewText>
            <SmallText>Nome do profissional:</SmallText>
            <TextSimple style={styles1.input}>Kaio Woen</TextSimple>
          </ViewText>

          <ViewText>
            <SmallText>Data e Hora:</SmallText>
            <TextSimple style={styles1.input}>{item.dateTime}</TextSimple>
          </ViewText>

          <SmallText>Descrição:</SmallText>
          <TextDescription>{item.description}</TextDescription>
        </ContainerDetails>
      </ScrollView>
    </Container>
  );
}

const styles1 = StyleSheet.create({
  inputReference: {
    width: w * 55,
  },
  inputNumber: {
    width: w * 25,
  },
});
