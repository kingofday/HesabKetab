import { openDatabase } from 'react-native-sqlite-storage';
var okCallback = function (p) {
  console.log('db opt is successful');
}
var errorCallback = function (e) {
  console.log('e :');
  console.log(e);
}

var db = openDatabase({ name: 'test.db', createFromLocation: '~hk.db' }, okCallback, errorCallback);

export const Create = (item, success, fail) => {
  let keys = Object.keys(item).filter(x => x != 'id');
  db.transaction(function (tx) {
    tx.executeSql('delete from unit');
    tx.executeSql(
      `INSERT INTO ${item.constructor.name} (${keys.toString()}) VALUES (${keys.map(x => '?').toString()})`,
      keys.map(x => item[x]),
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          if (success) success();
        } else {
          if (fail) fail();
          else console.log(`Please insert a valid ${tbl} Id`);
        }     
      });
  });
}

export const Read = (tbl, callback) => {
  db.transaction(tx => {
    tx.executeSql(`SELECT * FROM ${tbl}`, [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      if (callback) callback(temp);
    });
  });
}

export const Update = (tbl, item, success, fail) => {
  let keys = Object.keys(item).filter(x => x !== 'id');
  let vals = Object.values(item);
  vals.push(vals.shift());
  db.transaction((tx) => {
    tx.executeSql(
      `UPDATE ${tbl} set ${keys.map(x => x.toString() + '=?').join(',')} where id=?`,
      vals,
      (tx, results) => {
        if (results.rowsAffected > 0) {
          if (success) success();
        } else {
          if (failed) failed();
          else console.log(`Coludn't Update ${tbl}`);
        }
      }
    );
  });
}

export const Delete = (tbl, id, success, failed) => {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM  ${tbl} where user_id=?`,
      [id],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          if (success) success();
        } else {
          if (failed) failed();
          else console.log(`Please insert a valid ${tbl} Id`);
        }
      }
    );
  });
}