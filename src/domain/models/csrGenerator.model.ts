import { csrResponseDto } from "../dtos/csrGenerator/csrResponse.dto";
import { csrSubjectDto } from '../dtos/csrGenerator/csrSubject.dto';
import { CsrSubjectEntity } from '../entities/csrGenerator/csrSubject.entity';
import { csrGeneratorInputPort } from "../interfaces/csrGenerator/csrGeneratorInputPort.interface";
import { csrGeneratorOutputPort } from "../interfaces/csrGenerator/csrGeneratorOutputPort.interface";
import { csrGeneratorService } from '../interfaces/csrGenerator/csrGeneratorService.interface';
import { Validator } from "../interfaces/validator/validator.interface";

export class CsrGeneratorModel implements csrGeneratorInputPort{
    private readonly _csrGeneratorService: csrGeneratorService;
    private readonly _outputPort: csrGeneratorOutputPort;
    private readonly _validator: Validator<csrSubjectDto>;

    constructor(
        csrGeneratorService: csrGeneratorService, 
        csrGeneratorOutputPort: csrGeneratorOutputPort,
        csrValidator: Validator<csrSubjectDto>
    ){
        this._csrGeneratorService = csrGeneratorService;
        this._outputPort = csrGeneratorOutputPort;
        this._validator = csrValidator;
    }

    handle(subject: csrSubjectDto): void {
        const validationResult = this._validator.validate(subject);
        if(validationResult.error) { throw new Error(validationResult.error.message) }
        
        //si la validacion es exitosa se construye la entidad
        const subjectEntity: CsrSubjectEntity = new CsrSubjectEntity(subject);
        
        //Implementar validaciones de resultados (patron result quizas?)
        const result: csrResponseDto = this._csrGeneratorService.generateCsr(subjectEntity);
        this._outputPort.handle(result);
    }

}