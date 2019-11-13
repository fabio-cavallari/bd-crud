import mysql from "mysql";

export const executeQuery = async sqlQry => {
  const connection = mysql.createConnection({
    host: "marveldb.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "Ordep34280079!",
    database: "marvel_db",
    acquireTimeout: 1000000
  });
  connection.connect(err => {
    console.log("Trying to connect");
    if (err)
      return console.log(
        "Connection failed \nError: ",
        JSON.stringify(err, undefined, 2)
      );
    if (!err) console.log("Connected!");
  });

  connection.query(sqlQry, (error, results, fields) => {
    if (error) return JSON.stringify(error);
    else {
      connection.end();
      console.log("executou!");
      return JSON.stringify(results);
    }
  });
};
