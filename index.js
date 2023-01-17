import mysql from "mysql2"; // import library of mysql tools
//import { password,username  } from "./secrets.js";
import {dbConnections} from "./secrets.js";


const db = mysql.createConnection(dbConnections);

console.log("We are connected")

db.query("UPDATE users SET first_name = 'Marie' WHERE first_name = 'Edilma'",(err) => {
    if (err) { console.log("UPDATE ERROR -> ",err) 
    }
    else console.log("UPDATE DONE!");
} )
db.query("SELECT * FROM users ", (err,results)=>{
    if (err) console.log("ERROR -> ", err);
    
    console.table(results);
});
db.end();
