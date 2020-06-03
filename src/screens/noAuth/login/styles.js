import styled from 'styled-components/native';
import {
  TextButtonLight,
  SmallText,
  s3,
  s2,
  h,
  w,
  wh,
  ButtonLight,
} from '../../stylesShared';
export const Logo = styled.Image`
  flex: 1;
`;

export const LogoGoogle = styled.Image`
  height: ${w * 5}px;
  width: ${w * 5}px;
  position: absolute;
`;

export const TitleForm = styled(TextButtonLight)`
  font-size: ${s3}px;
  margin-top: 4%;
  margin-bottom: 8%;
`;

export const SmallTextRegister = styled(SmallText)`
  color: #000084;
  font-size: ${s2}px;
`;

export const SmallTextWithMargin = styled(SmallText)`
  margin-top: 6%;
`;

export const ButtonLoginSocial = styled.TouchableOpacity`
  border-width: 2px;
  width: ${wh * 9}px;
  height: ${wh * 9}px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border-color: rgba(0, 0, 94, 0.4);
`;

export const SmallTextOR = styled(SmallText)`
  text-align: center;
`;

export const ViewOR = styled.View`
  width: 80%;
  height: ${h * 6}px;
  margin-top: 15%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ViewSocial = styled(ViewOR)`
  margin-top: 3%;
  margin-bottom: 2%;
  justify-content: space-around;
`;

export const HalfDivider = styled.View`
  width: 45%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgba(0, 0, 94, 0.4);
  height: 3%;
`;

export const ButtonLogin = styled(ButtonLight)`
  margin-top: 7%;
`;
