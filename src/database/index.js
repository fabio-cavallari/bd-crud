import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database name"
});

export const connectWithDatabase = connection => {
  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");
  });
};
