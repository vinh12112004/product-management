const express = require('express')
const database = require("./config/database")
const route = require("./routes/client/index.route")
const adminRoute = require("./routes/admin/index.route");
require("dotenv").config();
const systemConfig = require('./config/system')
const app = express()


database.connect();
const port = process.env.PORT 

app.locals.prefixAdmin = systemConfig.prefixAdmin;


app.set("views","./views")
app.set("view engine","pug")
app.use(express.static("public"))

adminRoute(app);
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
