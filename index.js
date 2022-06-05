// event emitter
// we need event module 
const EventEmitter = require("node:events") // so that it does not contradict with third party module

// lets implement in node

const myEmitter = new EventEmitter(); // created an object using EventEmitter class
console.log(myEmitter); // we will see how many events we created , events count , max listeners 

// event register/listener using the object we created 
myEmitter.on('event',()=>{
    console.log("an event is triggered");
})

// another listener for the event 
myEmitter.on('event',()=>{ 
    console.log("Another listener")
})
// trigger or emit the event 
myEmitter.emit('event')

//----------------------------------------------------------------------
// advantage 
// we have to define *all the events* in call back , but we can define many listeners individually using event emitter 
//----------------------------------------------------------------------


myEmitter.on('one',function(a,b){
    console.log(a,b);
    console.log(this); // to see object property (myEmitter object)

    // we dont use arrow function, because this keyword always indicate arrow function itself.
    // if we use normal function keyword to create function , this keyword indicates myEmitter object here
})
myEmitter.emit('one','Hello','World')

//------------------------------------------------------------------------
// now if we think that EventEmitter class is not enough for our need , we can add more functionality to it. lets see how : 
class WithLog extends EventEmitter{
    execute(callback){
        console.log('Before Execution');
        this.emit('begin')
        callback();
        this.emit('end')
        console.log('After Execution');

    }
}
// lets create an object for WithLog class 
const withLog = new WithLog();

//now we add an event here
withLog.on('end',()=> console.log('End execution') )
withLog.on('begin',()=> console.log('Begin execution') )
withLog.execute(()=> console.log('--executing task--') );
//-------------------------------------------------------------------------