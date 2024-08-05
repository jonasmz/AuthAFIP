import { csrGeneratorModel } from "../domain/models/csrGenerator.model"

export class CsrGeneratorController{
    private model: csrGeneratorModel;

    constructor(model: csrGeneratorModel){
        this.model = model;
    }
    public generateCsr = (req: any, res: any)=>{
        const result = this.model.generateCsr({commonName: req.body.cn, organizationName: req.body.on, serialNumber: req.body.sn});
        res.json(result);
    }
}