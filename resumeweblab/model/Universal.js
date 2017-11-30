var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.Universal = function(tableName, params, callback){
    var query = "insert into " + tableName + " set ?";
    connection.query(query, params, function(err, res){
        callback(err, res);
    });
};