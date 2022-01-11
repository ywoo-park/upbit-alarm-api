"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.insert = exports.create = exports.connect = void 0;
const tslib_1 = require("tslib");
const sqlite3_1 = (0, tslib_1.__importDefault)(require("sqlite3"));
const verbose = sqlite3_1.default.verbose();
const connect = () => {
    let db = new verbose.Database(':memory:', sqlite3_1.default.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Connected to the database.');
        }
    });
    // close the database connection
    db.close();
};
exports.connect = connect;
const create = () => {
    let db = new verbose.Database(':memory:', sqlite3_1.default.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
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
    });
    // close the database connectionm
    db.close();
};
exports.create = create;
const insert = () => {
    let db = new verbose.Database(':memory:', sqlite3_1.default.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
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
};
exports.insert = insert;
const select = () => {
    let db = new verbose.Database(':memory:', sqlite3_1.default.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        else {
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
    // close the database connection
    db.close();
};
exports.select = select;
//# sourceMappingURL=index.js.map