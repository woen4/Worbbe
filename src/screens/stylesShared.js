import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
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
  margin: ${h * 31}px ${w * 5}px ${h * 3}px ${w * 5}px;
  padding-bottom: 3%;
  padding-top: 3%;
  elevation: 10;
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

//

//Button
export const Button = styled.TouchableOpacity`
  background-color: #000084;
  height: ${h * 6}px;
  max-height: 40px;
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
  height: ${wh * 11}px;
  width: ${wh * 11}px;
  border-radius: 100px;
  background-color: #fff;
  position: absolute;
  bottom: 1.5%;
  right: 3%;
  align-items: center;
  justify-content: center;
  elevation: 10;
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

export const MenuContainer = styled(Animatable.View)`
  background-color: #fff;
  border-radius: 8px;
  elevation: 10;
  border-color: #999;
  flex: 1;
  border-width: 2px;
  width: 45%;
  top: -3%;
  right: 1%;
  position: absolute;
`;

export const MenuContainerLeft = styled(Animatable.View)`
  background-color: #fff;
  border-radius: 8px;
  elevation: 10;
  border-color: #999;
  flex: 1;
  border-width: 2px;
  width: 50%;
  top: -3%;
  left: 1%;
  position: absolute;
`;

export const ItemMenu = styled.TouchableOpacity`
  align-items: center;
  padding-right: 15%;
  border-radius: 8px;
  flex-direction: row;
  padding-left: 10%;
  height: ${h * 5}px;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #fff;
  justify-content: space-between;
`;

export const TextItemMenu = styled(Text)`
  color: #000054;
  width: 76%;
  font-size: ${s1 + 3}px;
`;

export const DividerMenu = styled.View`
  background-color: #999;
  height: 1px;
  margin-left: 5%;
  margin-right: 5%;
  elevation: 1;
`;

export const ButtonLogout = styled.TouchableOpacity`
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  height: ${h * 4.6}px;
  width: 20%;
  flex-direction: row;
`;

export const HeaderGradient = styled(LinearGradient)`
  align-items: center;
  height: ${h * 37}px;
  width: 100%;
  position: absolute;
  background-color: #000044;
  justify-content: flex-start;
`;

export const HeaderProfile = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 20%;
  padding-top: 3.5%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const ButtonCamera = styled(ButtonIcon)`
  position: absolute;
  bottom: -3%;
  right: 0%;
  width: ${w * 9}px;
  height: ${w * 9}px;
  border-radius: 55px;
  background-color: #fff;
`;

export const PhotoProfile = styled(FastImage)`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;
