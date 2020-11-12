import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { S3Config } from '../config';

const { endpoint, region, accessKey, secretKey, bucket } = S3Config;

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint(endpoint),
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  region,
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key(req, file, setKey) {
    const originFilename = file.originalname;
    const extension = originFilename.substring(originFilename.lastIndexOf('.'));
    setKey(null, `uploads/${moment().format('YMD')}/${uuidv4()}${extension}`);
  },
});

export default multer({ storage });
