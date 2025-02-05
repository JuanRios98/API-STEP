import { pool } from "mssql";

export const sqlConfig = {
  user: 'sa',
  password: '123456',
  database: 'STEP',
  server: 'localhost',
    pool:{
    max: 10,
    min: 0
  },  
  options: {
    trusteConnection: true,
    trustServerCertificate: true
  }
}