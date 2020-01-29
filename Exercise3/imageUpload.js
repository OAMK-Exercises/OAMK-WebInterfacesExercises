const express = require('express')
const multer  = require('multer')
const multerUpload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000;

app.post('/', multerUpload.array('uploadsc', 12), (req, res, next) => {
  console.log(req.files);

  res.send("OK");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));