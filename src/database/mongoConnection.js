const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://7copas:13022000@cluster13.qsdnqag.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log(`mongoDB Atlas conectado!`))
    .catch((error) =>
      console.log(`erro ao conectar com o mongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
