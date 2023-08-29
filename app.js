const cookieParser = require("cookie-parser");
const express = require('express')
const app = express()
app.use(cookieParser())
app.use(express.json())

const {connectDB} = require('./config')
connectDB()

app.use("/api-docs", require('./documentation/swagger_api'))
app.use('/', require('./routes/routes'))


app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"
    res.status(err.statusCode).json({
        message: err.message,
    })
})


const port = 3000
app.listen(port, () => {
    console.log("Hosted on http://localhost:" + port)
})

//fsgdfgdfg
