import dotenv from 'dotenv';

dotenv.config();

export const DBConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'dbname',
  dialect: process.env.DB_DIALECT || 'mysql',
};

export const GitHubConfig = {
  clientID: process.env.GITHUB_CLIENT_KEY || 'client_key',
  clientSecret: process.env.GITHUB_CLIENT_SECRET || 'client_secret',
  callbackURL:
    process.env.GITHUB_CALLBACK_URL ||
    'http://localhost:3000/oauth/github/callback',
};

export const JwtConfig = {
  secret: process.env.JWT_SECRET || 'jwt_secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '24h',
};

export const S3Config = {
  accessKey: process.env.AWS_ACCESSKEY || 'access_key',
  secretKey: process.env.AWS_SECRETKEY || 'secret_key',
  region: process.env.AWS_REGION || 'region',
  endpoint: process.env.S3_ENDPOINT || 'http://s3-endpoint.com',
  bucket: process.env.S3_BUCKET || 'bucket_name',
};
