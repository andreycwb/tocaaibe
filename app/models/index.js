const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const sequelize = require('../../config/database');

const db = {};

fs.readdirSync(__dirname)
    .filter(
        file =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js',
    )
    .forEach(file => {
        console.log(path.join(__dirname, file));
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes,
        );
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
