import mysql2 from "mysql2";
export const PORT = process.env.PORT || 8000;


export const db = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "147258",
  database: "produtos"
});