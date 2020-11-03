export default {
  setUserInformation(information) {
    return {
      type: 'SET_USER_INFORMATION',
      payload: information,
    };
  },
};
