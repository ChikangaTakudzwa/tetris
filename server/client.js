
class Client {
    constructor(conn) {
        this.conn = conn;
        this.session = null;
  }
  
  send(msg) {
    console.log('Sending message to client')
  }
}

module.exports = Client