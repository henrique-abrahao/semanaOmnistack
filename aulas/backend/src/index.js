const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

// Merodo HTTP:
// Get: buscar uma informação do Back-end
// Post: Criar uma informação no Back-end
// Put: alterar uma informação no Back-end
// Delete: deletar uma informação no Back-end

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmentros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: ParÂmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, Postgrs, Oracle, Microsoft SQL Server
 * Nosql: MongoDB, CounchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()npm install knex
 */

app.use(routes);

app.listen(3333) // quando acessar localhost.com/3333 , vai acessar a aplicação
