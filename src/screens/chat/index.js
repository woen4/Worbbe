import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import {TitleHeader, Header, ButtonIcon} from '../stylesGlobal';

export default function Chat({navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá Kaio',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Sistema WorkGrid',
          avatar:
            'https://image.freepik.com/vetores-gratis/facebook-como-icone-com-sombra-longa-que-parece-simples-afirmativo_68708-504.jpg',
        },
      },
    ]);
  }, []);

  function onSend(newMessage) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function handleListService() {
    navigation.navigate('ListServices');
  }

  return (
    <>
      <Header>
        <ButtonIcon onPress={handleListService}>
          <Icon name="ios-arrow-back" size={27} color="#000084" />
        </ButtonIcon>
        <TitleHeader>WorkGrid</TitleHeader>
        <ButtonIcon />
      </Header>
      <GiftedChat
        placeholder="Digite uma mensagem..."
        renderUsernameOnMessage={true}
        messages={messages}
        onSend={(newMessage) => onSend(newMessage)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
