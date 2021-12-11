import mysql, { Connection, MysqlError } from 'mysql';

const connection: Connection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
});

const createConnection = async () => {
  connection.connect(function (err: MysqlError) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
  });
};

export const createShortenItem = async (original: string, shorten: string) => {
  const query: string = `insert into links (original, shorten) values ('${original}','${shorten}')`;

  connection.query(query, null, (err, rows) => {
    if (err) console.log(err);
    console.log(rows);
  });
};

// createShortenItem();

export default createConnection;
