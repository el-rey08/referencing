require('dotenv')
require('./config/DBC')
const express = require('express')
const postRouter= require('./router/postRouter')
const commentRouter =require('./router/commentRouter')
const app = express()
app.use(express.json())
app.use('/api/v1', postRouter)
app.use('/api/v1', commentRouter)
const port = process.env.port || 3567
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
}) 