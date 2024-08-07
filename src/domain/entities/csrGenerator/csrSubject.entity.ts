import { csrSubjectDto } from "../../dtos/csrGenerator/csrSubject.dto";

export class CsrSubjectEntity{
    private _commonName: string;
    private _organizationName: string;
    private _serialNumber: string;

    constructor(subject: csrSubjectDto){
        this._commonName = subject.commonName;
        this._organizationName = subject.organizationName;
        this._serialNumber = `CUIT ${subject.serialNumber}`;
    }

    get commonName(): string{
        return this._commonName;
    }

    get organizationName(): string{
        return this._organizationName;
    }

    get serialNumber(){
        return this._serialNumber;
    }

    get properties(){
        return {
            commonName: this._commonName,
            organizationName: this._organizationName,
            serialNumber: this._serialNumber
        }
    }
}