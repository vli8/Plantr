const {db, Gardener, Plot, Vegetable} = require('./models');

db.sync({force: true}).then(() => {
  console.log('Success');
})
.then(() => { return Vegetable.bulkCreate([
    {name: 'carrot', color: 'purple', planted_on: new Date()},
    {name: 'tomato', color: 'green', planted_on: new Date()}
    ])
})
.then((veggies) => {
      veggies.forEach((elem)=>{
        Gardener.create({
            name : "Jessica",
            age: 19,
            favoriteVegetableid : elem.id
        })
      })
})
.catch((error) => {
  console.log(error);
  db.close();
});

