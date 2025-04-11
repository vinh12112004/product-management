const express = require('express')
const database = require("./config/database")

const app = express()

require("dotenv").config();
database.connect();
const port = process.env.PORT 
const route = require("./routes/client/index.route")



app.set("views","./views")
app.set("view engine","pug")
app.use(express.static("public"))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
