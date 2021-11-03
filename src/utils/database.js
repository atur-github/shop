const mongoose = require('mongoose');

const MONGOOSE_URI = process.env.MONGOOSE_URI;

mongoose.connection.once('open', () => {
    console.log(`database is ready!`);
})

mongoose.connection.on('error', (err) => {
    console.log('databese connection failed!\n', err)
})

async function connectDatabase() {
    await mongoose.connect(MONGOOSE_URI, {
        useNewUrlParser: true 
    })
}

async function disconnectDatabase() {
    await mongoose.disconnect();
}

module.exports = {
    connectDatabase,
    disconnectDatabase
}