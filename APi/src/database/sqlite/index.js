const sqlite3 = require("sqlite3");
const sqLite = require("sqLite");
const path = require("path");

async function sqLiteConnection(){
  const database = await sqLite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

    return database;
}

module.exports = sqLiteConnection;