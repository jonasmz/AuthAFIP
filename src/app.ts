import { AwilixDIContainer } from "./adapters/diContainer/awilix.dicontainer";
import { bootStrapDepencies } from "./adapters/diContainer/dependencies/bootStrap.dependencies";
import { ExpressRestServer } from "./adapters/restServer/express.restServer";
import { restServer } from "./adapters/restServer/interfaces/restServer.interface";
import { serverConfig } from "./adapters/restServer/interfaces/serverConfig.type";


const svrConfig: serverConfig = { port: 5005 };

const server: restServer = new ExpressRestServer(
    svrConfig, 
    bootStrapDepencies( new AwilixDIContainer() )
);

server.start(); 