const express = require('express')
const cors = require('cors');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('GOT');
  res.send('Hello World!')
});

module.exports = router;