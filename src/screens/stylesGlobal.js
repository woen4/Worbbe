import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
export const w = Dimensions.get('window').width / 100;
export const h = Dimensions.get('window').height / 100;
export const wh = ((w * h) / 10) * 1.618;
export const s5 = wh * 6.2;
export const s4 = wh * 5.4;
export const s3 = wh * 4.6;
export const s2 = wh * 3.8;
export const s1 = wh * 3;

const Text = styled.Text`
  font-family: 'SF Pro Display Bold';
`;

//View
export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ViewForm = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin: 0px ${w * 5}px ${h * 3}px ${w * 5}px;
  padding-bottom: 3%;
`;

export const Header = styled.View`
  height: ${h * 6.5}px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding-left: 1%;
  padding-right: 2%;
`;
//

//Text
export const TextButton = styled(Text)`
  font-size: ${s2}px;
  color: #fff;
`;

export const TextButtonLight = styled(TextButton)`
  color: #000084;
`;

export const SmallText = styled(TextButtonLight)`
  font-size: ${s1}px;
  color: 'rgba(0, 0, 94, 0.7)';
`;

export const TitleHeader = styled(Text)`
  font-size: ${s3}px;
  color: #000084;
`;
export const TitleHeaderLight = styled(Text)`
  font-size: ${s3}px;
  color: #fff;
`;
export const LabelInput = styled(Text)`
  align-self: flex-start;
  font-size: ${s2}px;
  color: #000084;
  margin-left: 7%;
`;
//

//TextInput
export const Input = styled.TextInput`
  border-radius: 40px;
  margin: 4% 0px 4%;
  padding: 0px 0px 1px 10px;
  width: ${w * 80}px;
  color: #fff;
  font-size: ${s2}px;
  font-family: 'SF Pro Display Bold';
  background-color: rgba(0, 0, 131, 0.5);
`;
export const InputWithIcon = styled(Input)`
  height: 70%;
  padding-left: ${w * 10}px;
`;
export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
`;
//

//Button
export const Button = styled.TouchableOpacity`
  background-color: #000084;
  height: 7.5%;
  width: 90%;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLight = styled(Button)`
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

export const ButtonTransparent = styled.TouchableOpacity`
  height: ${h * 4.6}px;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(ButtonTransparent)`
  height: ${h * 4.6}px;
  width: 8%;
`;
//

//Modal

export const ViewModal = styled.View`
  align-items: center;
  flex: 1;
`;

export const TextButtonModal = styled(TextButtonLight)`
  font-size: 20px;
  color: #000054;
  padding-left: 5px;
`;

export const ButtonModal = styled(ButtonTransparent)`
  height: 20%;
  flex-direction: row;
  width: 70%;
  border-width: 1px;
  border-color: rgba(0, 0, 255, 0.1);
  background-color: rgba(0, 0, 255, 0.01);
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleModal = styled(Text)`
  font-size: ${wh * 7}px;
  color: #000054;
  text-align: center;
  margin-bottom: 20px;
`;
//

export const IosIconInput = styled(Icon)`
  position: absolute;
  padding-left: ${w * 2.5}px;
  padding-bottom: ${h * 2}px;
`;

export const MaterialIconInput = styled(Icon2)`
  position: absolute;
  padding-left: ${w * 2.5}px;
  padding-bottom: ${h * 2}px;
`;
