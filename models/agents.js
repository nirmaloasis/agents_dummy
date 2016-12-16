"use strict"
const db = require('../config/db')

class Agents {


  static findByName (username, cb) {
    console.log("2............",username);
    db.query("SELECT * FROM agents_info WHERE username = ?;" ,[username], cb)
  }



}

module.exports = Agents
