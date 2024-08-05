import { CsrResponseDto } from "../dtos/csrResponse.dto";
import { csrSubject } from "../entities/csrSubject .entity";

export interface csrGenerator{
    generateCsr(subjectEntity: csrSubject): CsrResponseDto;
}