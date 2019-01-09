import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyD3b1FfEtBEimtXn2kmOg2uv_Y-lrdf5Rk",
  authDomain: "hesabketab-9f537.firebaseapp.com",
  databaseURL: "https://hesabketab-9f537.firebaseio.com",
  projectId: "hesabketab-9f537",
  storageBucket: "hesabketab-9f537.appspot.com",
  messagingSenderId: "259827364231"
};
let app = firebase.initializeApp(config);
export  default db = app.database();