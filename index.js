/* eslint-disable valid-jsdoc */
/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');

/**
 * Bring DB config in from separate file
 * to keep logic clean.
 */
const conf = require('./config');

/**
 * Main entry point to script
 * This is an 'async' function
 * @see {@link https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await}
 */
async function run() {
  const connection = await mysql.createConnection(conf);
  await readSongs(connection);
  await readGenre(connection);
  connection.end();
}

run();



/**
 * Reads all products from the DB
 * @param {Promise} connection
 * @return {Promise}
 */
function readSongs(connection) {
  console.log('Selecting all songs...\n');
  return connection.query('SELECT * FROM songs')
      .then((res) => {
        console.log(res);
      });
}
/**
 * @param {promise} connection
 * @return {promise}
 */
function readGenre(connection) {
  console.log('Selecting all songs...\n');
  return connection.query('SELECT * FROM genre')
      .then((res) => {
        console.log(res);
      });
}
