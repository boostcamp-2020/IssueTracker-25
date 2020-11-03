import jwt from 'jsonwebtoken';

const generateToken = (JwtConfig) => {
  return ({ id }) => {
    const payload = { id };
    const option = {
      expiresIn: JwtConfig.expiresIn,
    };
    return jwt.sign(payload, JwtConfig.secret, option);
  };
};

export default generateToken;
