require('dotenv').config();
require('express-async-errors');


const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRouter = require('./routes/authRoutes')
// express. json() is a built in middleware function in Express starting from v4. 16.0. 
// It parses incoming JSON requests and puts the parsed data in req.
app.use(express.json())


app.get('/', (req, res) => {
    res.send("ai");
})

// authRouter here call
app.use('/api/v1/auth', authRouter);


// if the route not found from any of above path
app.use(notFound);

// error handeler middleware jhon smilgA
app.use(errorHandlerMiddleware)




const port = process.env.PORT || 4120;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();






