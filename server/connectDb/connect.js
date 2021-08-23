// Using Node.js `require()`
const mongoose = require('mongoose')

function connectDB() {
  console.log(process.env.CONNECT_DATABASE)
  mongoose
    .connect(
      'mongodb+srv://hieu-mai:AgCW411IJto7uDgD@cluster0.zx7je.mongodb.net/dissertation?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then(() => console.log('connect successfully!!!'))
    .catch((err) => console.log('connect failed!!!', err))
}

module.exports = connectDB
