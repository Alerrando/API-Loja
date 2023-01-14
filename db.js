import mysql from "mysql";

export const db = mysql.createPool({
  host: "containers-us-west-198.railway.app",
  port: "7108",
  user: "root",
  password: "nTYujX2OXFtWfaS8tV90",
  database: "railway",
});