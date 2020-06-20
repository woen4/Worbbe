import styled from 'styled-components/native';
import {w, h, wh, s1, ViewCenter, PhotoProfile} from '../../../stylesShared';

export const ViewText = styled.View`
  margin: 2% 0% 8% 0;
  padding: 0% 3% 0% 3%;
`;
export const TextSimple = styled.Text`
  border-bottom-width: 2px;
  border-color: #000084;
  color: #000054;
  margin-top: 4%;
  padding-bottom: 4%;
  font-family: 'SF Pro Display Regular';
`;

export const ContainerDetails = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5% 5% 5%;
`;

export const TextDescription = styled.Text`
  height: ${h * 12}px;
  width: 100%;
  font-family: 'SF Pro Display Medium';
  font-size: ${s1 - 2}px;
  margin: 5% 0% 7% 0%;
  padding: 0.5% 1.5% 0px 1.5%;
  text-align: justify;
  border-radius: 4px;
  border-width: 0.2px;
  border-color: #000084;
`;

const MarginPhoto = styled.View`
  height: ${wh * 27}px;
  width: ${wh * 27}px;
  background-color: #000054;
  border-radius: 70px;
  padding: 1.5% 1.5% 1.5% 1.5%;
`;

export const ViewPhotos = styled(ViewCenter)`
  flex-direction: row;
  height: ${h * 21}px;
`;

export const MarginPhotoClient = styled(MarginPhoto)`
  position: absolute;
  top: -40%;
  right: ${-3 * w}px;
  padding-right: 0px;
`;

export const MarginPhotoServer = styled(MarginPhoto)`
  position: absolute;
  top: -40%;
  padding-left: 0px;
  left: ${-3 * w}px;
`;
