const {db, Gardener, Plot, Vegetable} = require('./models');

db.sync({force: true}).then(() => {
  console.log('Success');
}).then(() => { Vegetable.bulkCreate([
    {name: 'carrot', color: 'purple', planted_on: new Date()},
    {name: 'tomato', color: 'green', planted_on: new Date()}
])
}).catch((error) => {
  console.log(error);
  db.close();
});

