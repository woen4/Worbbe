import React, {useState, useRef} from 'react';
import {Form} from '@unform/mobile';
import {Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ViewAntiBot,
  InputAntiBot,
  ViewRow,
  ButtonRefreshBot,
  IconRobot,
  ModalBot,
} from './styles';

export default function AntiBotModal({visible, confirmBot}) {
  const [antiBotData, setAntiBotData] = useState(antiBot());
  const result = antiBotData.result;
  const formRef = useRef(null);
  let resultUser;

  function submitForm(data) {
    resultUser = data.result;
  }

  function checkBot() {
    formRef.current.submitForm();
    if (resultUser == result) {
      confirmBot();
    } else {
      console.log('Deu Ruim');
    }
  }

  return (
    <ModalBot
      backdropColor="#FFF"
      backdropOpacity={0.8}
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInTiming={1000}
      animationOutTiming={1000}
      useNativeDriver={true}
      isVisible={visible}>
      <ViewAntiBot>
        <IconRobot
          onPress={() => {
            checkBot();
          }}>
          <Icon name="ios-checkmark-circle-outline" color="#444" size={27} />
        </IconRobot>
        <ViewRow>
          {antiBotData.expression.map((item) => {
            return (
              <Text
                key={Math.random() * 130}
                style={{color: item.color, fontSize: item.size}}>
                {item.caracter}
              </Text>
            );
          })}
          <ButtonRefreshBot onPress={() => setAntiBotData(antiBot())}>
            <Icon name="ios-repeat" size={27} color="#444" />
          </ButtonRefreshBot>
        </ViewRow>
        <Form ref={formRef} onSubmit={submitForm}>
          <InputAntiBot
            placeholderTextColor="#000054"
            placeholder="Resultado:"
            name="result"
          />
        </Form>
      </ViewAntiBot>
    </ModalBot>
  );
}

function antiBot() {
  const r1 = Math.floor(Math.random() * 11);
  const r2 = Math.floor(Math.random() * 11);
  let num1, num2;
  let more;
  let r1name, r2name;
  let result;
  if ((Math.floor(Math.random() * 2) + 1) % 2 === 0) {
    result = r1 + r2;
    more = true;
  } else {
    more = false;
    result = r1 - r2;
  }

  switch (r1) {
    case 0:
      r1name = 'Zero';
      break;
    case 1:
      r1name = 'Um';
      break;
    case 2:
      r1name = 'Dois';
      break;
    case 3:
      r1name = 'Três';
      break;
    case 4:
      r1name = 'Quatro';
      break;
    case 5:
      r1name = 'Cinco';
      break;
    case 6:
      r1name = 'Seis';
      break;
    case 7:
      r1name = 'Sete';
      break;
    case 8:
      r1name = 'Oito';
      break;
    case 9:
      r1name = 'Nove';
      break;
    case 10:
      r1name = 'Dez';
      break;
  }
  switch (r2) {
    case 0:
      r2name = 'Zero';
      break;
    case 1:
      r2name = 'Um';
      break;
    case 2:
      r2name = 'Dois';
      break;
    case 3:
      r2name = 'Três';
      break;
    case 4:
      r2name = 'Quatro';
      break;
    case 5:
      r2name = 'Cinco';
      break;
    case 6:
      r2name = 'Seis';
      break;
    case 7:
      r2name = 'Sete';
      break;
    case 8:
      r2name = 'Oito';
      break;
    case 9:
      r2name = 'Nove';
      break;
    case 10:
      r2name = 'Dez';
      break;
  }

  if ((Math.floor(Math.random() * 2) + 1) % 2 === 0) {
    num1 = r1name;
  } else {
    num1 = r1;
  }
  if ((Math.floor(Math.random() * 2) + 1) % 2 === 0) {
    num2 = r2name;
  } else {
    num2 = r2;
  }

  const back = {};

  let expression = [
    {
      caracter: '',
      color: '#fff',
      size: 1,
    },
  ];
  if (typeof num1 === 'string') {
    let i;
    for (i = 0; i < num1.length; i++) {
      const randomSize = Math.floor(Math.random() * 25) + 13;
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
      expression.push({
        caracter: num1.charAt(i),
        color: randomColor,
        size: randomSize,
      });
    }
  } else {
    expression[0] = {
      caracter: num1,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      size: Math.floor(Math.random() * 25) + 13,
    };
  }

  if (typeof num2 === 'string') {
    let i;
    if (more === true) {
      expression[expression.length + 1] = {
        caracter: '+',
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        size: 30 + Math.floor(Math.random() * 10),
      };
    } else {
      expression[expression.length + 1] = {
        caracter: '-',
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        size: 30 + Math.floor(Math.random() * 10),
      };
    }
    for (i = 0; i < num2.length; i++) {
      const randomSize = Math.floor(Math.random() * 23) + 15;
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
      expression.push({
        caracter: num2.charAt(i),
        color: randomColor,
        size: randomSize,
      });
    }
  } else {
    if (more === true) {
      expression[expression.length + 1] = {
        caracter: '+',
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        size: 30 + Math.floor(Math.random() * 10),
      };
    } else {
      expression[expression.length + 1] = {
        caracter: '-',
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        size: 30 + Math.floor(Math.random() * 10),
      };
    }
    expression[expression.length + 2] = {
      caracter: num2,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      size: Math.floor(Math.random() * 25) + 13,
    };
  }
  back.expression = expression;
  back.result = result;
  return back;
}
