import { Router } from "express";
import { diContainer } from "../../../diContainer/abstractions/diContainer.interface";
import { CsrGeneratorController } from "../../../../application/controllers/csrGenerator.controller";

export const csrGeneratorRouter = (container: diContainer): Router => {
    const router = Router();

    router.post('/csr-generator', container.resolve<CsrGeneratorController>('csrGeneratorController').execute);
    
    return router;
}