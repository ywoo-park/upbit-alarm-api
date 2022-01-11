import sqlite3 from 'sqlite3';

const verbose = sqlite3.verbose();

const connect = () => {
    let db = new verbose.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the database.');
        }
    });

    db.close();
}

const create = () => {
    let db = new verbose.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the database.');
        }
    });

    db.serialize(() => {
        db.run('CREATE TABLE langs(name text)');

        db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function (err) {
            if (err) {
                return console.log(err.message);
            }
        });

        let sql = `SELECT name FROM langs`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
            });
        });
    })

    db.close();
}

const insert = () => {
    let db = new verbose.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the database.');
        }
    });

    db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function (err) {
        if (err) {
            return console.log(err.message);
        }
    });

    // close the database connection
    db.close();
}

const select = () => {
    let db = new verbose.Database(':memory:', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the database.');
        }
    });

    let sql = `SELECT name FROM langs`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.name);
        });
    });

    db.close();
}

export {connect, create, insert, select}