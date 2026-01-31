require('dotenv').config(); // Для считывания файла .env
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors()); // Настройка CORS для возможности отправки запросов с браузера
app.use(express.json()); // Возможность парсинга JSON-формата для приложения
app.use('/api', router);

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