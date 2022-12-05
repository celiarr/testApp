const pgp = require('pg-promise')();
const db = pgp('postgres://stats_99ty_user:RFbyIf3x5WANM3iae1kSWuL0dLIHvAvA@dpg-cdel6r4gqg4d3ggr0fr0-a.oregon-postgres.render.com/stats_99ty');
    
db.connect()
    .then(obj => {
        obj.done(); 
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
});
module.exports = db;
