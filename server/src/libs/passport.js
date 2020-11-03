import { Strategy as GitHubStrategy } from 'passport-github2';
import passport from 'passport';
import { GitHubConfig } from '../config';
import db from '../models';

const GitHubVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  done,
) => {
  const { User: UserModel } = db.sequelize.models;
  try {
    const [user] = await UserModel.findOrCreate({
      where: { uid: profile.id },
      defaults: {
        uid: profile.id,
        name: profile.username,
        profileLink: profile.profileUrl,
      },
    });
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
};

const githubStrategy = new GitHubStrategy(GitHubConfig, GitHubVerifyCallback);

export default () => {
  passport.use(githubStrategy);
};
