const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5678 }); 
// สร้าง websockets server ที่ port 4000
wss.on('connection', function connection(ws) { // สร้าง connection
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
  });
ws.on('close', function close() {
  // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
    console.log('disconnected');
  });
ws.send('init message to client');
  // ส่ง data ไปที่ client เชื่อมกับ websocket server นี้
});