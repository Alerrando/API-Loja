import mysql from "mysql";

export const db = mysql.createPool({
  host: "containers-us-west-17.railway.app",
  port: "5716",
  user: "root",
  password: "ll8DYOTrBTMm8D5DYqx0",
  database: "railway",
});