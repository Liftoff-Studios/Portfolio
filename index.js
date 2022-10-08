let express = require("express");
let app = express();
const path = require('path');

app.use("/",express.static(path.join(__dirname,"/Resources")))
  
app.listen(3000);
module.exports = app;