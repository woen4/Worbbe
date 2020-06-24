import React, {useEffect, useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from './unitHired';
import GPSimage from '../../../../assets/hiredsEmpty.png';
import {TextEmpty1, TextEmpty2, Separator} from './styles';
import {
  Container,
  ButtonIcon,
  TitleHeader,
  Header,
  w,
  h,
} from '../../../stylesShared';

import {FlatList, Image} from 'react-native';

export default function ListHireds({route, navigation}) {
  const [hireds, setHireds] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const hiredsData = route.params;

  const fillHireds = useCallback(() => {
    let count = 0;
    if (hiredsData !== undefined) {
      hiredsData.forEach((item) => {
        item.id = count;
        count++;
      });
    }
    setHireds(hiredsData);
  }, []);

  useEffect(() => {
    fillHireds();
  }, []);

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>

        <TitleHeader>Interessados</TitleHeader>
        <ButtonIcon onPress={() => {}} />
      </Header>
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshing={false}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={EmptyComponent()}
        data={hireds}
        onRefresh={refreshList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Card
            title={item.name}
            avatarUrl={item.avatarUrl}
            remove={() => {}}
            id={item.id}
          />
        )}
      />
    </Container>
  );
}

function EmptyComponent() {
  return (
    <>
      <TextEmpty1>Nenhum profissional{'\n'}interessado</TextEmpty1>
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          width: w * 60,
          height: h * 60,
          marginTop: '30%',
        }}
        source={GPSimage}
        autoPlay
        loop
      />
      <TextEmpty2>Ainda...</TextEmpty2>
    </>
  );
}
