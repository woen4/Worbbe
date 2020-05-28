import styled from 'styled-components/native';
import {w, h, s2, s3} from '../../../stylesShared';

export const ViewCarousel = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${h * 27}px;
  padding-bottom: 10px;
  border-bottom-width: 0.2px;
  border-bottom-color: #999;
`;

export const ImageCarousel = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const TitleItemCarousel = styled.Text`
  width: 100%;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 11px;
  border-bottom-left-radius: 11px;
  height: 16%;
  position: absolute;
  text-align: center;
  font-size: ${s2}px;
  border-radius: 15px;
  color: #fff;
  font-family: 'SF Pro Display Bold';
  background-color: rgba(0, 0, 120, 0.8);
`;

export const TitleCarousel = styled.Text`
  font-size: ${s3}px;
  border-radius: 15px;
  width: 100%;
  color: #000064;
  font-family: 'SF Pro Display Bold';
  margin-top: 3%;
  margin-left: 5%;
`;

export const ItemCarousel = styled.View`
  background-color: #fff;
  height: ${h * 22}px;
  justify-content: flex-end;
  width: 90%;
  margin-top: 5%;
`;

export const ViewListServices = styled.View`
  flex: 1;
  margin-top: 1%;
`;

export const TitleList = styled(TitleCarousel)`
  margin-top: 7%;
  margin-bottom: 3%;
`;
