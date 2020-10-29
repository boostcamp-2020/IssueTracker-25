const express = require('express');

const router = express.Router();
const { getIssueList } = require('../service/issue');

router.get('', getIssueList);

module.exports = router;
