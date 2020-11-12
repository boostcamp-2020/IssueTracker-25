const FileController = {
  s3UploadCallback(req, res, next) {
    try {
      const { location } = req.file;
      const payLoad = { url: location };
      res.json(payLoad);
    } catch (err) {
      next(err);
    }
  },
};

export default FileController;
