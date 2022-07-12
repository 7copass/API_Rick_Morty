const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/character.route');
const connectToDatabase = require('./src/database/mongoConnection')
const port = 3001;
const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/characters/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
