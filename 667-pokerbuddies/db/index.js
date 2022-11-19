const pgp = require('pg-promise')();
const db = pgp('postgres://students:student@localhost:5432/playerstats');
    
db.connect()
    .then(obj => {
        obj.done(); 
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
});
module.exports = db;