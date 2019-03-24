"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_OWNER,
    host: 'localhost',
    database: 'eook_api',
    password: process.env.DB_OWNER_PW,
    port: process.env.DB_PORT
});
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users;', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const getUserById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const createUser = (request, response) => {
    const { name, email } = request.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
    });
};
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User modified with ID: ${id}`);
    });
};
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
//# sourceMappingURL=queries.js.map