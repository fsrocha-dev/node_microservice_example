const express = require("express")

const app = express()

require('./api/routes')(app);

const PORT  = process.env.PORT || 3000

app.listen(PORT, () => { console.log(`Service running on port: ${PORT}`) })