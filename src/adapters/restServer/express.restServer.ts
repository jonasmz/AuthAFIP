import express, { Application } from 'express';

import { restServer } from './interfaces/restServer.interface';
import { serverConfig } from './interfaces/serverConfig.type';
import { csrGeneratorRouter } from './routes/auth/csrGenerator.route';
import { diContainer } from '../diContainer/interfaces/diContainer.interface';

export class ExpressRestServer implements restServer{
    private readonly _serverApp: Application;
    private readonly _config: serverConfig;
    private readonly _container: diContainer;

    constructor(config: serverConfig, container: diContainer){
        this._serverApp = express();
        this._config = config;
        this._container = container;

        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this._serverApp.use(express.json());
    }

    private routes(){
        this._serverApp.use('/api/auth', csrGeneratorRouter(this._container));
    }

    start(): void {
        this._serverApp.listen(this._config.port, ()=>{
            console.log(`Server started on port: ${this._config.port}`);
        });
    }

}