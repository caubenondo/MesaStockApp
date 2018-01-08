import Firebase from 'firebase'

// Initialize Firebase
// Account: haidworkstudio@gmail.com
var config = {
  apiKey: "AIzaSyCblL5nOLCNqjgUol9WXZMMHIVZogtRTVc",
  authDomain: "mesastockroom.firebaseapp.com",
  databaseURL: "https://mesastockroom.firebaseio.com",
  projectId: "mesastockroom",
  storageBucket: "",
  messagingSenderId: "153039108851"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbInventoryRef = db.ref('inventory');
export const dbOrdersRef = db.ref('orders');