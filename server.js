import express from 'express'
import dotenv from 'dotenv'
// import userRoutes from './routes/userRoutes.js'
import router1 from './routes/addressRoutes.js'
import bodyParser from 'body-parser'


dotenv.config()
const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods: " * "");
  next();
});

// app.use('/users', userRoutes)
app.use('/address', router1)


app.listen(port, () => {
  console.log(`MERN server is listening on port ${port}`)
})
