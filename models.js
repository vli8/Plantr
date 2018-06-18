const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');


const Gardener = db.define("gardener", {
    name : Sequelize.STRING,
    age : Sequelize.INTEGER,
});

const Plot = db.define('plot', {
    size : Sequelize.INTEGER,
    shade : Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable',{
    name : Sequelize.STRING,
    color : Sequelize.STRING,
    planted_on : Sequelize.DATE
})

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});



db.sync({force:true}).then(()=>{
    console.log('Success, Very Nice, I Like');
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    db.close();
})

module.exports = db;