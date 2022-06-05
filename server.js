// executes from server side


const EventEmitter = require('node:events')
class Server extends EventEmitter {
    constructor(client){
        super(); // to access constructor data
        client.on('command',(command)=>{
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
module.exports = (client) => new Server(client)

/*
- created server instance of Server class and exports it
- receives clients and pass it to instance ( to constructor)
*/