// import jsom server
const jsonserver  = require('json-server');

//create a server using json server
const server = jsonserver.create()

//set up path for db.json file
const router = jsonserver.router('db.json');

//return a middleware used by json server
const middleware = jsonserver.defaults()

//setup port number
const port = process.env.port || 3001 //default port number for backend

//use in server
server.use(middleware)
server.use(router)


//to run the port 
server.listen(port,()=>{
    console.log('Jsonserver listening on port 3001');
})