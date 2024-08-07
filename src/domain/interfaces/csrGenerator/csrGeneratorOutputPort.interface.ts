import { csrResponseDto } from "../../dtos/csrGenerator/csrResponse.dto";

export interface csrGeneratorOutputPort{
    handle(csrResponse: csrResponseDto): void;
    response(): any;
}