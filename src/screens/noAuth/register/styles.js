import styled from 'styled-components/native';
import {w, h, ButtonIcon, ViewForm, ButtonLight} from '../../stylesShared';

export const MarginPhoto = styled.View`
  height: ${w * 36}px;
  width: ${w * 36}px;
  background-color: transparent;
  border-radius: 120px;
  margin-top: ${h * 1}px;

  border-width: 4px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
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

export const PhotoHired = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 120px;
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

export const ViewFormAdjusted = styled(ViewForm)`
  margin: 65% ${w * 5}px ${h * 3}px ${w * 5}px;
`;

export const ButtonRegister = styled(ButtonLight)`
  margin-top: ${h * 4}px;
  margin-bottom: ${h * 1}px;
`;
