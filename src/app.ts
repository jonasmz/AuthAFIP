import { restServer } from './frameworks/restServer/interfaces/restServer.interface';
import { AwilixDIContainer } from "./frameworks/diContainer/awilix.dicontainer";
import { bootStrapDepencies } from "./frameworks/diContainer/dependencies/bootStrap.dependencies";
import { ExpressRestServer } from './frameworks/restServer/express.restServer';
import { serverConfig } from './frameworks/restServer/interfaces/serverConfig.type';

const svrConfig: serverConfig = { port: 5005 };

const server: restServer = new ExpressRestServer(
    svrConfig, 
    bootStrapDepencies( new AwilixDIContainer() )
);

server.start(); 