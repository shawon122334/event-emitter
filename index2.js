// File system example

const fs = require('node:fs')
const EventEmitter = require('node:events')

class WithLog extends EventEmitter {
    execute(asyncFunc,...args){
        console.time('execute')
        this.emit('begin')
        asyncFunc(...args,(err,data)=>{
            if(err){
                // error handling in event
                this.emit('error',err)
                return
            }
            // if no error
            this.emit('data',data)
            console.timeEnd('execute');
            this.emit('end')
        })
    }
}
// now we create an object for WithLog class
const withLog = new WithLog();  // now we create events with withLog object 
withLog.on('begin',()=> console.log('starting execution'));
withLog.on('end',()=>console.log('execution completed'));

// registering an event to work with data
withLog.on('data',(data)=>console.log(`Length : ${data.length}`));
// error event for error handling
withLog.on('error',(err)=> console.log(err) );


withLog.execute(fs.readFile,'') // error event 
withLog.execute(fs.readFile,'./sample.txt'); // execute function expects an async function and some arguments, as we want to read file we pass the file location



//---------------------------------------------------
/*
    normal js


    // spread, rest : rest here
    const myFunc =(a,...args)=>{
        console.log(a);
        console.log(args)
    }
    myFunc(1,2,3,4,5)

    output: 1
            [2,3,4,5]
*/