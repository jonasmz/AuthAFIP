import { aliasTo, AwilixContainer, createContainer, InjectionMode } from "awilix";
import { diContainer } from "./abstractions/diContainer.interface";
import { injectionModes } from './abstractions/injectionModes.enum';

export class AwilixDIContainer implements diContainer{
    private readonly _container: AwilixContainer;

    constructor(modeInjection: injectionModes = injectionModes.CLASSIC){
        this._container = createContainer({
            injectionMode: (modeInjection === injectionModes.CLASSIC)? InjectionMode.CLASSIC : InjectionMode.PROXY
        });
    }

    
    register(name: string, resolver: any): void {
        //validar y sanitizar la cadena y el resolver
        this._container.register( { [name]: resolver } );       
    }

    aliasTo(name: string, index: string): void {
        //todo: validar la existencia de la dependencia en el contenedor
        this._container.register({[name]: aliasTo(index)});
    }

    resolve<T>(name: string): T {
        //validar que exista la registracion
        return this._container.resolve(name);
    }

}