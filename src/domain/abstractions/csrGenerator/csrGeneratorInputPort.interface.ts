import { csrSubjectDto } from "../../dtos/csrGenerator/csrSubject.dto";

export interface csrGeneratorInputPort{
    handle(subject: csrSubjectDto): void;
}