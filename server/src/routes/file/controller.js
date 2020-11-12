const FileController = {
  s3UploadCallback(req, res, next) {
    try {
      const { originalname, location } = req.file;
      const payLoad = { filename: originalname, url: location };
      res.status(201).json(payLoad);
    } catch (err) {
      next(err);
    }
  },
};

export default FileController;
