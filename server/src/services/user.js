const UserService = ({ UserModel }) => ({
  getUserList() {
    return UserModel.findAll();
  },
});

export default UserService;
