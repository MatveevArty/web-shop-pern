require('dotenv').config(); // Для считывания файла .env
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        // Установка подключения к БД
        await sequelize.authenticate();

        // Сверка состояния БД со схемой данных БД
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch(e) {
        console.log(e)
    }
}

start();