import { diContainer } from "../interfaces/diContainer.interface";
import { csrGeneratorDependenciesLoader } from "./csrGenerator.dependencies";

export const bootStrapDepencies = (container: diContainer): diContainer => {
    csrGeneratorDependenciesLoader(container);

    return container;
}