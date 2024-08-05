import { csrGenerator } from "../interfaces/csrGenerator.interface";
import { CsrSubjectDto } from '../dtos/csrSubject.dto';
import { csrSubject } from "../entities/csrSubject .entity";
import { CsrResponseDto } from "../dtos/csrResponse.dto";

export class csrGeneratorModel{
    private readonly csrGeneratorService: csrGenerator;

    constructor(csrGenerator: csrGenerator){
        this.csrGeneratorService = csrGenerator;
    }

    generateCsr(CsrSubject: CsrSubjectDto): CsrResponseDto{
        //TODO: validations
        
        const csrSubjectEntity: csrSubject = new csrSubject(CsrSubject.commonName, CsrSubject.organizationName, CsrSubject.serialNumber)
        return this.csrGeneratorService.generateCsr(csrSubjectEntity);
    }
}