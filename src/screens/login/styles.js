import styled from 'styled-components/native';
import {
  TextButtonLight,
  Input,
  SmallText,
  s3,
  s2,
  h,
  w,
  wh,
} from '../stylesGlobal';

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

export const SmallTextOR = styled(SmallText)`
  border-width: 2px;
  width: 14%;
  text-align: center;
  padding-top: 3.5%;
  justify-content: center;
  height: 100%;
  border-radius: 150px;
  border-color: rgba(0, 0, 94, 0.4);
`;

export const SmallTextFB = styled(SmallTextOR)`
  border-color: rgba(0, 0, 64, 0.7);
  background-color: rgba(0, 0, 131, 1);
  color: #fff;
  width: ${h * 6}px;
  height: ${h * 6}px;
`;

export const SmallTextGG = styled(SmallTextFB)`
  border-color: rgba(0, 0, 20, 0.1);
  background-color: #fff;
  color: #fff;
  width: ${h * 6}px;
  height: ${h * 6}px;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 10%;
  justify-content: space-around;
`;

export const HalfDivider = styled.View`
  width: 45%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: rgba(0, 0, 94, 0.4);
  height: 3%;
`;
