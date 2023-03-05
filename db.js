import mysql2 from "mysql2";
export const PORT = process.env.PORT || 8000;


export const db = mysql2.createPool({
  host: process.env.host || "containers-us-west-72.railway.app",
  port: process.env.port || "7859",
  user: process.env.user || "root",
  password: process.env.password || "tnKXVsogrw7XJlDt5cAr",
  database: process.env.database || "railway",
});