import styled from 'styled-components/native';
import {w, h, ButtonLight} from '../../stylesShared';
import LinearGradient from 'react-native-linear-gradient';

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

export const PhotoHired = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;

export const ButtonRegister = styled(ButtonLight)`
  margin-top: ${h * 4}px;
  margin-bottom: ${h * 1}px;
`;

export const HeaderGradient = styled(LinearGradient)`
  align-items: center;
  height: ${h * 40}px;
  width: 100%;
  position: absolute;
  background-color: #000044;
  justify-content: flex-start;
`;
