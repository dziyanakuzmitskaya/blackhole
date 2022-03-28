const express = require('express')
const path = require('path')
const mainRoutes = require('./routes/web/main.router')
const apiRoutes = require('./routes/api/routes')

const PORT = process.env.PORT || 3030

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(mainRoutes)
app.use(express.json())

app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, './client/dist')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
