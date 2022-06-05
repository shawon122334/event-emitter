// take commands from client side

const EventEmitter = require('node:events')
const readline = require('readline') // provides us with a way to read data stream from a file or ask your user for an input.

// creating an object for readLine module
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
})

const client = new EventEmitter();
const server = require('./server')(client) // sending client instance to server

// we would like to print the response we get from server
// we emit the event in server
server.on('response',(res)=>{
    process.stdout.write(res) 
    process.stdout.write('\n')
})

// taking input(line event)
// add,delete,list,help(commands)
rl.on('line',(command)=>{
    // console.log(command); // we are getting the inputs. now we have to send this to server
    client.emit('command',command)
      
})