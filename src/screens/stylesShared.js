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
  margin: 70% ${w * 5}px ${h * 3}px ${w * 5}px;
  padding-bottom: 3%;
  padding-top: 3%;
`;

export const Header = styled.View`
  height: ${h * 6.5}px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #000054;
  padding-left: 2%;
  padding-right: 2%;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
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
export const MediumText = styled(TextButtonLight)`
  font-size: ${s2}px;
  color: #000054;
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

//Button
export const Button = styled.TouchableOpacity`
  background-color: #000084;
  height: ${h * 6}px;
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
  background-color: #fff;
  border-top-width: 2px;
  border-color: #999;
  height: ${h * 25}px;
`;

export const TextButtonModal = styled(TextButtonLight)`
  font-size: 20px;
  color: #000054;
  padding-left: 5px;
`;

export const ButtonModal = styled(ButtonTransparent)`
  height: 30%;
  flex-direction: row;
  width: 70%;
  border-width: 1px;
  border-color: rgba(0, 0, 255, 0.1);
  background-color: rgba(0, 0, 255, 0.01);
  border-radius: 30px;
  margin-top: 4%;
  margin-bottom: 1%;
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
