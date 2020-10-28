import OpenColor from 'open-color';
// https://yeun.github.io/open-color/

const colors = {
  default: {
    background: OpenColor.white,
    color: OpenColor.gray[9],
    borderColor: OpenColor.gray[2],
  },
  green: {
    background: OpenColor.green[7],
    color: OpenColor.white,
    borderColor: 'transparent',
  },
  gray: {
    background: OpenColor.gray[6],
    color: OpenColor.white,
    borderColor: 'transparent',
  },
  whiteRed: {
    background: OpenColor.white,
    color: OpenColor.red[8],
    borderColor: OpenColor.gray[2],
  },
};

export default colors;
