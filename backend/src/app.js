const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./database/database.js');

require('./models/Publication.js')
require('./models/Clients.js')


const port = process.env.PORT || 3007;

app.use(express.json());
app.use(cors());

const routerPulication = require('./routers/publication/publication.js');
const routerClients = require('./routers/clients/clients.js')

async function database() {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

database();

app.use('/api/publicaciones', routerPulication)
app.use('/api/clientes', routerClients)



app.get('/', (req, res) => {
  res.send('Bienvenido a la MegaWiki');
});

app.listen(port, () => {
  console.log(`MegaWiki listening at http://localhost:${port}`);
});