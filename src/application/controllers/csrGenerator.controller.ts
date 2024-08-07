import { csrSubjectDto } from '../../domain/dtos/csrGenerator/csrSubject.dto';
import { csrGeneratorInputPort } from '../../domain/interfaces/csrGenerator/csrGeneratorInputPort.interface';
import { csrGeneratorOutputPort } from '../../domain/interfaces/csrGenerator/csrGeneratorOutputPort.interface';

export class CsrGeneratorController{
    private readonly _inputPort: csrGeneratorInputPort;
    private readonly _outputPort: csrGeneratorOutputPort;

    constructor(
        csrGeneratorInputPort: csrGeneratorInputPort,
        csrGeneratorPresenter: csrGeneratorOutputPort
    ){
        this._inputPort = csrGeneratorInputPort,
        this._outputPort = csrGeneratorPresenter
    }

    public execute = (req: any, res: any)=>{
        const csrSubject: csrSubjectDto = {
            commonName: req.body.commonName,
            organizationName: req.body.organizationName,
            serialNumber: req.body.serialNumber
        }
        
        this._inputPort.handle(csrSubject);
        res.json(this._outputPort.response);
    }
}