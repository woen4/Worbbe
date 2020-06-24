import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';
import Input from '../../../unform/input';

import {
  w,
  h,
  ViewForm,
  SmallText,
  s2,
  s1,
  ButtonLight,
  Button,
} from '../../../stylesShared';
import LinearGradient from 'react-native-linear-gradient';

export const MarginPhoto = styled.View`
  height: ${w * 36}px;
  width: ${w * 36}px;
  background-color: transparent;
  border-radius: 120px;
  margin-top: 5%;
  padding: ${w * 0.1}px ${w * 0.1}px ${w * 0.1}px ${w * 0.1}px;
  border-width: 4px;
  border-color: #fff;
`;

export const FormAddService = styled(ViewForm)`
  padding: ${h * 2}px ${w * 0}px ${h * 2}px ${w * 0}px;
  margin: 3% 3% 3% 3%;
  border-width: 1px;
  border-color: #999;
`;

export const MediumText = styled(SmallText)`
  font-size: ${s2}px;
  width: 80%;
  margin-top: 9%;
  padding-left: 2%;
  font-family: 'SF Pro Display Bold';
  border-bottom-width: 1px;
  border-color: #000044;
  padding-bottom: 2%;
  text-align: left;
  color: #000064;
`;

export const ViewPicker = styled.View`
  width: 80%;
  height: ${h * 6}px;
  border-bottom-width: 1px;
  border-color: #000044;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 10%;
`;

export const PickerLocal = styled(ViewPicker)`
  width: 80%;
`;

export const ViewPickerLocal = styled.View`
  flex-direction: row;
  width: 95%;
  align-self: center;
  margin-right: 1%;
  justify-content: center;
  align-items: center;
`;

export const PickerStyled = styled(Picker)`
  height: 100%;
  width: 100%;
`;

export const ButtonIconAddress = styled.TouchableOpacity`
  width: 9%;
  margin-left: 3%;
  margin-top: 8%;
`;

export const InputDescription = styled(Input)`
  height: ${h * 12}px;
  width: 90%;
  font-family: 'SF Pro Display Regular';
  font-size: ${s1}px;
  margin-top: 2%;
  background-color: transparent;
  margin-bottom: 7%;
  color: #333;
  padding-left: ${w * 1}px;
  padding-top: 0.5%;
  text-align: left;
  text-align-vertical: top;
  border-radius: 6px;
  border-width: 0.3px;
  border-color: #000;
  font-weight: 400;
`;

export const ScrollBlue = styled.ScrollView`
  background-color: #000054;
`;

export const LinearBackground = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ViewButtons = styled.View`
  width: 100%;
  position: absolute;
  bottom: 2%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonNext = styled(Button)`
  width: 45%;
`;

export const ButtonBack = styled(ButtonLight)`
  width: 45%;
`;
