import express from 'express';
import passport from 'passport';
import { v4 as uuidv4 } from 'uuid';
import { JwtConfig } from '../config';
import generateToken from '../libs/jwt';

const router = express.Router();
const clientURL = process.env.CLIENT_URL || 'http://localhost:4000';
const codeMap = new Map();

const githubVerifyCallbackController = (req, res) => {
  const authCode = uuidv4();
  codeMap.put(authCode, req.user);
  res.redirect(`${clientURL}/oauth/callback?code=${authCode}`);
};

router.get(
  '/github',
  passport.authenticate('github', { session: false, scope: ['user:email'] }),
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    session: false,
    failureRedirect: clientURL,
  }),
  githubVerifyCallbackController,
);

router.post('/token', (req, res) => {
  const {
    body: { code },
  } = req;
  const user = codeMap.get(code);
  codeMap.delete(code);
  const token = generateToken(JwtConfig)(user);
  return res.json({ token });
});

export default router;
