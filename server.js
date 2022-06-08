// executes from server side


const EventEmitter = require('node:events')
class Server extends EventEmitter {
    constructor(client){
        super(); // to access constructor data
        client.on('command',(command)=>{
            // this command event executes when client server receives a command
            // console.log(`server`,command);
            switch(command){
                case 'help':
                case 'add':
                case 'delete':  
                case 'ls':
                    this[command]();
                    break;
                default:
                    this.emit('response','unknown word');
            }
        })
    }
    // 'this' means server instance 
    help(){
        this.emit('response','help...')
    }
    add(){
        this.emit('response','add...')
    }
    delete(){
        this.emit('response','delete...')
    }
    ls(){
        this.emit('response','ls...')
    }
}
module.exports = (client) => new Server(client)  // exporting from here so that we could use it to other files

/*
- created server instance of Server class and exports it
- receives clients and pass it to instance ( to constructor)
*/