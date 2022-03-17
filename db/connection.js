const {Pool} = require('pg');
const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config();

// if(!process.env.PGDATABASE) {
//     throw new Error('PGDATABASE');
// }

module.exports = new Pool();