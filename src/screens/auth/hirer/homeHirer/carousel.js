import React, {useState, memo} from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';

const itemsCarousel = [
  {
    id: 0,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
  {
    id: 1,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
  {
    id: 2,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
  {
    id: 3,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
  {
    id: 4,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
  {
    id: 5,
    image:
      'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
  },
];

import {
  ViewCarousel,
  ImageCarousel,
  ViewDot,
  ItemCarousel,
  TextDot,
} from './styles';

function Carousel() {
  const [active, setActive] = useState(0);
  const {width} = Dimensions.get('window');

  const changeDot = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != active) {
      setActive(slide);
    }
  };
  return (
    <>
      <ViewCarousel>
        <ScrollView
          onScroll={changeDot}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled>
          {itemsCarousel.map((item, index) => (
            <ItemCarousel key={index}>
              <ImageCarousel
                key={index}
                source={{uri: item.image}}
                resizeMode="stretch"
              />
            </ItemCarousel>
          ))}
        </ScrollView>
        <ViewDot>
          {itemsCarousel.map((item, k) => (
            <TextDot
              key={k}
              style={k === active ? styles.dot : styles.dotActive}>
              ⬤
            </TextDot>
          ))}
        </ViewDot>
      </ViewCarousel>
    </>
  );
}

const styles = StyleSheet.create({
  dot: {
    color: '#000074',
  },
  dotActive: {
    color: 'rgba(0, 0, 94, 0.2)',
  },
});

export default React.memo(Carousel);
