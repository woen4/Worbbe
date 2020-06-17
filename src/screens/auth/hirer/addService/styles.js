import styled from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-community/picker';
import Input from '../../../unform/input';

import {
  w,
  h,
  ViewForm,
  SmallText,
  s2,
  s1,
  ButtonIcon,
} from '../../../stylesShared';

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

export const HeaderProfile = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: ${h * 10}px;
  padding-top: 3.5%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const FormAddService = styled(ViewForm)`
  padding: ${h * 2}px ${w * 0}px ${h * 2}px ${w * 0}px;
  margin: 0% 5% 3% 5%;
  elevation: 10;
  border-width: 1px;
  border-color: #999;
`;

export const MediumText = styled(SmallText)`
  font-size: ${s2}px;
  text-align: center;
  margin-left: 5%;
  color: #000044;
`;

export const ButtonDateTime = styled(ButtonIcon)`
  width: 40%;
  height: 80%;
  elevation: 10;
  background-color: #fff;
  border-radius: 10px;
  padding: 0px ${w * 0}px ${h * 0}px ${w * 0}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SuportDateTime = styled.View`
  width: 100%;
  height: ${h * 8}px;
  margin-top: 6%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
`;

export const ViewPicker = styled.View`
  width: 80%;
  height: ${h * 6}px;
  border-width: 2px;
  border-color: #000044;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 4%;
`;

export const PickerLocal = styled(ViewPicker)`
  width: 80%;
`;

export const ViewPickerLocal = styled.View`
  flex-direction: row;
  width: 85%;
  margin-right: 1%;
  justify-content: center;
  align-items: center;
`;

export const TextFooter = styled(MediumText)`
  margin-top: 8%;
  font-size: ${s1}px;
  color: #000084;
  margin-bottom: -3%;
`;

export const DateTimePicker = styled(DateTimePickerModal)``;

export const PickerStyled = styled(Picker)`
  height: 100%;
  width: 100%;
`;

export const ButtonIconAddress = styled.TouchableOpacity`
  width: 9%;
  margin-left: 3%;
`;

export const InputPrice = styled(Input)`
  width: 80%;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: transparent;
  color: #000054;
  font-size: ${s2}px;
  margin-right: -20%;
  font-family: 'SF Pro Display Bold';
`;

export const InputDescription = styled(Input)`
  height: ${h * 12}px;
  width: 85%;
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
