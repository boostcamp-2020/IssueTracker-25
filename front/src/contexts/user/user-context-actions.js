import userContextTypes from './user-context-types';

export default {
  setUserInfo(info) {
    return {
      type: userContextTypes.setUserInfo,
      payload: { info },
    };
  },
  resetUserInfo() {
    return {
      type: userContextTypes.resetUserInfo,
    };
  },
};
