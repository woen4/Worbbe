import styled from 'styled-components/native';
import {w, h, s2, s3, s1, Container} from '../../../stylesShared';

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
  width: ${w * 46}px;
  margin-bottom: 6%;
  margin-horizontal: ${w * 2}px;
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
  flex: 1;
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
  flex-direction: row;
  align-items: center;
  margin-bottom: 2%;
  justify-content: center;
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

export const ButtonAddService = styled.TouchableOpacity`
  width: 95%;
  align-self: center;
  elevation: 7;
  background-color: #fff;
  border-radius: 10px;
  height: ${h * 6}px;
  margin-top: 3%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
`;

export const TextEmpty1 = styled.Text`
  font-family: 'SF Pro Display Bold';
  font-size: ${s3}px;
  position: absolute;
  top: 56%;
  left: 10%;
  color: #000084;
`;

export const TextEmpty2 = styled.Text`
  font-family: 'SF Pro Display Bold';
  font-size: ${s3}px;
  top: 87%;
  left: 45%;
  text-align: right;
  position: absolute;
  color: #000084;
`;
