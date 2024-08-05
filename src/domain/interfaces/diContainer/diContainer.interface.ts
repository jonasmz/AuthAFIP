import { scopes } from "./scopes.enum";

export interface diContainer {
    register(name: string, resolver: any, scope: scopes): void;
    resolve<T>(name: string): T;
}