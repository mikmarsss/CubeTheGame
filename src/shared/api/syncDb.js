import express from 'express';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cubeUsers', 'postgres', 'rfktylehm2024', {
    host: '127.0.0.1',
    dialect: 'postgres',
});

const app = express();
const port = 3001;



app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log(`Server is running on PORT:${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});