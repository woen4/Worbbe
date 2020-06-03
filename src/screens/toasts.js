import Toast from 'react-native-tiny-toast';
export default function ToastDefault(msg) {
  Toast.show(msg, {
    position: Toast.position.center,
    containerStyle: {
      backgroundColor: '#555',
      borderRadius: 95,
      paddingHorizontal: '5%',
      elevation: 10,
    },
    textStyle: {
      color: '#fff',
      borderRadius: 95,
      fontFamily: 'SF Pro Display Regular',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 1500,
    animation: true,
  });
}
