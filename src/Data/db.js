import { openDatabase } from 'react-native-sqlite-storage';
var okCallback = function (p) {
  console.log('db-->okCallback: opt is successful');
}
var errorCallback = function (e) {
  console.log('db-->errorCallback: otp failed with error:');
  console.log(e);
}

var db = openDatabase({ name: 'test.db', createFromLocation: '~HK.db' }, okCallback, errorCallback);

export const Add = (item, success, fail) => {
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
          else console.log(`db-->Add: adding ${tbl} failed!`);
        }
      });
  });
}

export const GetAll = (tbl, callback) => {
  db.transaction(tx => {
    tx.executeSql(`SELECT * FROM ${tbl}`, [], (tx, results) => {
      var temp = [];
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
      }
      if (callback) callback(temp);
      return temp;
    });
  });
}

export const Find = (tbl, id, callback) => {
  db.transaction(tx => {
    tx.executeSql(`SELECT * FROM ${tbl} WHERE id = ?`, [id], (tx, results) => {
      if (results.rows.length > 0) callback(results.rows.item(0));
      else {
        console.log(`db-->Find: item with id = ${id} not found!`);
        callback(null);
      }
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
          else console.log(`db-->Update: Coludn't Update ${tbl}`);
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
          else console.log(`db-->Delete: Please insert a valid ${tbl} Id`);
        }
      }
    );
  });
}