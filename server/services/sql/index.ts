import mysql from 'mysql';

const pool = mysql.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  connectionLimit: 10,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
});

// pool.query(`select * from links where id = 1`, [], (err, res) => {
//   if (err) throw err;
//   console.log(res);
//   return res;
// });

// const createConnection = async () => {
//   connection.connect(function (err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }

//     console.log('Connected to the MySQL server.');
//   });
// };

export const createShortenItem = async (original: string, shorten: string) => {
  const query: string = `insert into links (original, shorten) values ('${original}','${shorten}')`;

  pool.query(query, null, (err, rows) => {
    if (err) console.log(err);
    console.log(rows);
  });
};

// export const findLinkById = (shorten_id: string) => {
//   const query: string = `select * from links where shorten = '${shorten_id}'`;

//   return pool.query(query, null, (err, rows) => {
//     if (err) console.log(err);
//     const result = { result: rows[0].original };
//     console.log(result);

//     return result;
//   });
// };
// createShortenItem();

// async function query(sql: any, params: any) {
//   const [rows, fields] = await pool.execute(sql, params);

//   return rows;
// }

export default pool;
