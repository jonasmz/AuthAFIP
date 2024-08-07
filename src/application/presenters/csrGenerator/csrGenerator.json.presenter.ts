import { csrResponseDto } from "../../../domain/dtos/csrGenerator/csrResponse.dto";
import { csrGeneratorOutputPort } from "../../../domain/interfaces/csrGenerator/csrGeneratorOutputPort.interface";

export class CsrGeneratorJsonPresenter implements csrGeneratorOutputPort{
    protected _jsonResponse: any | null = null;

    handle(csrResponse: csrResponseDto): void {
        //logica de formato de respuesta

        this._jsonResponse = csrResponse;
    }

    get response(){
        return this._jsonResponse;
    }



}