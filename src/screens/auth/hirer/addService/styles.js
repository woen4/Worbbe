import styled from 'styled-components/native';
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
  margin: 2% 5% 3% 5%;
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
`;


