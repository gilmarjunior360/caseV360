//Imports
const app = require('./app');

//Config
require('dotenv').config();

//Server
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server running on port ${port}`)});
