require ('dotenv').config ();
const app = require ('./app');
const port = process.env.PORT || 4001;
const connect = require ('./configs/db');

app.listen (port, async (req, res) => {
  await connect ();
  console.log ('listening to port 4000');
  console.log ('connected to data base');
});
