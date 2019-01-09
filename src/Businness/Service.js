import { db } from './DbConfig';

export const getUnits = ()=>{
    db.database().ref('units/').once('value',function(snapshot){
        console.log(snapshot.val())

    });
}

export const addUnit =  (item) => {
    db.database().ref('units/').push(item).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

export const removeUnit = (id)=>{
    db.database().ref(`units/${id}/`).remove().then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error:',error)
        //console.log(error)
    })
}