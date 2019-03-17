import React from 'react';
import { Alert } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'HK.db', createFromLocation: 1 });

export default initDb = () => {

    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='unit'",
            [],
            function (tx, res) {
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS unit', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS unit(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, count INTEGER NOT NULL',
                        []
                    );
                }
            }
        );

        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='cost'",
            [],
            function (tx, res) {
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS cost', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS cost(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, price INTEGER NOT NULL,date TEXT NOT NULL,',
                        []
                    );
                }
            }
        );

    });

}