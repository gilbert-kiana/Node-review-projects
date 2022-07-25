const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gilbert:YHTgJF8Afs7L7HDv@cluster0.28gau.mongodb.net/task_manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the db ..."))
  .catch((err) => console.log(err));
