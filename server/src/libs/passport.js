import { Strategy as GitHubStrategy } from 'passport-github2';
import passportJwt from 'passport-jwt';
import passport from 'passport';
import { GitHubConfig, JwtConfig } from '../config';
import db from '../models';

const { Strategy: JwtStrategy, ExtractJwt } = passportJwt;
const { User: UserModel } = db.sequelize.models;

const GitHubVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  done,
) => {
  try {
    const [user] = await UserModel.findOrCreate({
      where: { uid: profile.id },
      defaults: {
        uid: profile.id,
        name: profile.username,
        profileLink: profile.photos[0].value,
      },
    });
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
};

const jwtVerifyCallback = async (jwtPayload, done) => {
  try {
    const { id } = jwtPayload;
    const user = await UserModel.findByPk(+id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JwtConfig.secret,
};

const githubStrategy = new GitHubStrategy(GitHubConfig, GitHubVerifyCallback);
const jwtStrategy = new JwtStrategy(jwtStrategyOptions, jwtVerifyCallback);

export default () => {
  passport.use(githubStrategy);
  passport.use(jwtStrategy);
};
