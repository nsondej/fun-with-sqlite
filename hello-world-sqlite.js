var fs = require('fs');
var fn = 'hello-world.db';
var dbFile = './' + fn
var exists = fs.existsSync(dbFile);


// Check if DB file exists, create if not
if(!exists){
    console.log("DB file does not exist")
    fs.openSync(dbFile, 'w');
    console.log("DB file created: " + fn)
}

// Open DB file
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

db.serialize(function() {
    if(!exists) {
        db.run("CREATE TABLE Stuff (thing TEXT)");
    }
    db.run(".schema");
})
