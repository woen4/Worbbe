import React from 'react';
import LottieView from 'lottie-react-native';
import {wh} from './stylesShared';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
export function LottieLoading({visible, source, size}) {
  let sizeIn;
  if (size === null) {
    sizeIn = 8;
  } else {
    sizeIn = size;
  }

  return (
    <Modal
      style={styles.modal}
      backdropColor="#FFF"
      backdropOpacity={0.8}
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInTiming={1000}
      animationOutTiming={1000}
      useNativeDriver={true}
      isVisible={visible}>
      <LottieView
        style={{width: wh * sizeIn, height: wh * sizeIn}}
        source={source}
        autoPlay
        loop
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
