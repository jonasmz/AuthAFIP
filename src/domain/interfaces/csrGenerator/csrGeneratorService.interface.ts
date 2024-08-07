import { csrResponseDto } from "../../dtos/csrGenerator/csrResponse.dto";
import { CsrSubjectEntity } from "../../entities/csrGenerator/csrSubject.entity";

export interface csrGeneratorService {
    generateCsr(subject: CsrSubjectEntity): csrResponseDto;
}