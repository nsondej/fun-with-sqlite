var db = require('sqlite');
var fs = require('fs');

Promise.resolve()
    // Open db
    .then(() => db.open('./hello-world.db', { Promise }))
    .catch(err => console.error(err.stack));

    // 

