const http = require('http');
require('dotenv').config();
const app = require('./app');

const { 
    connectDatabase
} = require('./utils/database');


const PORT = process.env.PORT || 3000;






async function initServer() {
    await connectDatabase();

    http.createServer(app)
        .listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`);
        })
}

initServer();