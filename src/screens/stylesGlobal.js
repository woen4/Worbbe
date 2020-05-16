import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width / 100;
const h = Dimensions.get('window').height / 100;
const wh = (w * h) / 10;
const wg = 0;

//View
export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ViewForm = styled(ViewCenter)`
  height: ${h * 40}px;
  margin: ${h * 3}px 0px ${h * 3}px;
`;

export const Header = styled.View`
  flex: auto;
  height: ${h * 8}px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding-left: 2%;
  padding-right: 2%;
`;
//

//Text

export const TextButton = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;

export const TextButtonLigth = styled(TextButton)`
  color: #000084;
`;

export const TitleHeader = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000084;
`;
//

//TextInput
export const Input = styled.TextInput`
  border-radius: 40px;
  height: ${h * 4.3}px;
  margin: 10px 0px 10px;
  padding: 0px 0px 1px 10px;
  width: ${w * 80}px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background-color: rgba(0, 0, 131, 0.5);
`;
//

//Button
export const Button = styled.TouchableOpacity`
  background-color: #000084;
  height: 7%;
  width: 90%;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
export const ButtonTransparent = styled.TouchableOpacity`
  height: ${h * 4.6}px;
  width: 50%;
  align-items: center;

  justify-content: center;
`;
export const ButtonLigth = styled(Button)`
  border-color: #000084;
  background-color: #fff;
  border-width: 3px;
`;
export const ButtonFloat = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: #fff;
  position: absolute;
  bottom: 1.5%;
  right: 3%;
  align-items: center;
  justify-content: center;
`;

export const IconTransparent = styled(ButtonTransparent)`
  height: ${h * 3}px;
  width: 8%;
`;
//

//Modal

export const ViewModal = styled.View`
  align-items: center;
  flex: 1;
`;

export const TextButtonModal = styled(TextButtonLigth)`
  font-size: 20px;
  color: #000054;
`;

export const ButtonModal = styled(ButtonTransparent)`
  height: 20%;
  width: 60%;
  border-width: 1px;
  border-color: rgba(0, 0, 255, 0.1);
  background-color: rgba(0, 0, 255, 0.01);
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleModal = styled.Text`
  font-size: ${wh * 7}px;
  font-weight: bold;
  color: #000054;
  text-align: center;
  margin-bottom: 20;
`;
//
