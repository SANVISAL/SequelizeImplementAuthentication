import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "sequelize",
  process.env.DB_USER || "sa",
  process.env.DB_PASSWORD || "yourStrong(!)Password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mssql",
    port: Number(process.env.DB_PORT) || 1433,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export { sequelize };
