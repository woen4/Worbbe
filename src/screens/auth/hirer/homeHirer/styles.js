import styled from 'styled-components/native';
import {w, h, s2, wh, s1, Container} from '../../../stylesShared';

export const ViewCarousel = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${h * 27}px;
  background-color: #f80;
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;

export const ImageCarousel = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ItemCarousel = styled.View`
  background-color: #fff;
  height: 100%;
  width: ${w * 100}px;
  justify-content: flex-end;
`;

export const ContainerService = styled.TouchableOpacity`
  background-color: #fff;
  elevation: 10;
  border-radius: 10px;
  align-items: center;
  height: ${wh * 25}px;
  margin-top: 3%;
  margin-bottom: 5%;
  margin-left: 3%;
  width: ${wh * 36.5}px;
`;

export const Title = styled.Text`
  color: #000074;
  font-family: 'SF Pro Display Bold';
  font-size: ${s2}px;
`;

export const SubTitle = styled(Title)`
  font-size: ${s1 + 1}px;
`;

export const ViewRowBetween = styled.View`
  width: 90%;
  height: 20%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const ViewCalendar = styled.View`
  flex-direction: row;
  margin-top: 8%;
`;

export const ButtonChat = styled.TouchableOpacity`
  flex: 1;
`;

export const ViewDot = styled.View`
  position: absolute;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  justify-content: center;
`;

export const TextDot = styled.Text`
  color: #000084;
  font-size: 11px;
  margin-horizontal: 1px;
  text-align: center;
`;
