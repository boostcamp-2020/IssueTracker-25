import color from '../../../libs/color';
// https://yeun.github.io/open-color/

const theme = {
  default: {
    background: color.white,
    color: color.darkGray,
    borderColor: color.light,
  },
  green: {
    background: color.green,
    color: color.white,
    borderColor: 'transparent',
  },
  gray: {
    background: color.lightGray,
    color: color.white,
    borderColor: 'transparent',
  },
  grayBlack: {
    background: color.lightGray,
    color: color.black,
    borderColor: 'transparent',
  },
  whiteRed: {
    background: color.white,
    color: color.red,
    borderColor: color.lightGray,
  },
  redWhite: {
    background: color.red,
    color: color.white,
    borderColor: color.lightGray,
  },
  blue: {
    background: color.blue,
    color: color.white,
    borderColor: 'transparent',
  },
};

export default theme;
