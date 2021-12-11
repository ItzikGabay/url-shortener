import mysql, { Connection, MysqlError } from 'mysql';

export const connection: Connection = mysql.createConnection({
  database: process.env.NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

const createConnection = () => {
  connection.connect(function (err: MysqlError) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
  });
};

export default createConnection;
