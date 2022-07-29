import { Dialect } from 'sequelize/types';
require('dotenv').config()

interface DbConfigTypes {
  host: string;
  username: string;
  password: string;
  database: string;
  port: number;
  dialect: Dialect;
}

export const dbConfig: DbConfigTypes = {
  host: process.env.HOST || '',
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  database: process.env.DB || 'defaultdb',
  port: parseInt(process.env.DBPORT || '23060'),
  dialect: 'mysql',
};
