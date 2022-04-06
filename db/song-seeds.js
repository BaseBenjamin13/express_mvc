const Song = require('../models/song-model');
const seedData = require('./song-seeds.json');

console.log(seedData);

// process.exit()

Song.deleteMany({})
    .then( () => {
        return Song.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally( () => {
        process.exit()
    })