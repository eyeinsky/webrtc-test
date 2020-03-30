
const express = require('express');
const https = require('https');
const cors = require('cors');
const fs = require('fs');
const socketio = require('socket.io')

// conf
const PORT = 8443;

// serve static https
const app = express();
app.use('/', express.static('.'));

const httpsServer = https.createServer({
  key: fs.readFileSync('./localhost.yay-key.pem'),
  cert: fs.readFileSync('./localhost.yay.pem'),
}, app);



const io = socketio(httpsServer)

io.on('connection', function(socket){
  console.log('a user connected');
});

httpsServer.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
