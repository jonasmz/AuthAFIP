export class csrSubject {
    private commonName: string;
    private organizationName: string;
    private serialNumber: string;

    constructor(commonName: string, organizationName: string, serialNumber: number){
        this.commonName = commonName,
        this.organizationName = organizationName,
        this.serialNumber = `CUIT ${serialNumber}`
    }

    get subject(){
        return {
            commonName: this.commonName,
            organizationName: this.organizationName,
            serialNumber: this.serialNumber
        }
    }
}