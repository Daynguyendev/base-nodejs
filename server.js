import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser'


dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods: " * "");
  next();
});

app.use(bodyParser.json({ limit: '50mb', inflate: true }))
app.use('/users', userRoutes)


app.listen(port, () => {
  console.log(`MERN server is listening on port ${port}`)
})
