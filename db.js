import mysql from "mysql";
export const PORT = process.env.PORT || 8000;


export const db = mysql.createPool({
  host: process.env.host || "containers-us-west-17.railway.app",
  port: process.env.port || "5716",
  user: process.env.user || "root",
  password: process.env.password || "ll8DYOTrBTMm8D5DYqx0",
  database: process.env.database || "railway",
});