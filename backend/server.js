require ('dotenv').config ();
const app = require ('./app');
const port = process.env.PORT || 4002;
const connect = require ('./configs/db');

app.listen (port, async (req, res) => {
  await connect ();
  console.log ('listening to port 4002');
  console.log ('connected to data base');
});
