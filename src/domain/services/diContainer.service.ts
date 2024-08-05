import { AwilixContainer, createContainer } from "awilix";
import { diContainer } from "../interfaces/diContainer/diContainer.interface";
import { scopes } from "../interfaces/diContainer/scopes.enum";

export class AwilixDiContainer implements diContainer{
    private readonly container: AwilixContainer;

    constructor(){
        this.container = createContainer();
    }

    register(name: string, resolver: any, scope: scopes): void {
        this.container.register({[name]: resolver});
    }
    resolve<T>(name: string): T {
        return this.container.resolve(name);
    }

}