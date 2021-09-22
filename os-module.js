//os module

const os = require('os'); //looking for built in module

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds 
console.log(`system uptime is ${os.uptime} seconds`); 

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    feeMem: os.freemem(),
}

console.log(currentOS);