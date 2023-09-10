const app = require('./app')

const port = 3000
app.listen(port, () => {
    console.log("Hosted on http://localhost:" + port)
})