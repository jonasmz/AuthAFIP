export interface diContainer{
    register(name: string, resolver: any): void;
    aliasTo(name: string, index: string): void;
    resolve<T>(name: string): T;
}