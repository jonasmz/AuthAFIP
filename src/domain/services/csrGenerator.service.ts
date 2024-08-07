import forge from 'node-forge';
import { csrResponseDto } from "../dtos/csrGenerator/csrResponse.dto";
import { CsrSubjectEntity } from "../entities/csrGenerator/csrSubject.entity";
import { csrGeneratorService } from "../interfaces/csrGenerator/csrGeneratorService.interface";

export class CsrGeneratorService implements csrGeneratorService{
    
    generateCsr(subject: CsrSubjectEntity): csrResponseDto {
        const keys = forge.pki.rsa.generateKeyPair(2048);
        const csr = forge.pki.createCertificationRequest();
        csr.publicKey = keys.publicKey;
        csr.setSubject([
            {
                name: 'commonName',
                value: subject.commonName
            },
            {
                name: 'organizationName',
                value: subject.organizationName
            },
            {
                name: 'serialNumber',
                value: subject.serialNumber
            }
        ]);

        csr.sign(keys.privateKey, forge.md.sha256.create());

        return {
            privateKey: forge.pki.privateKeyToPem(keys.privateKey),
            publicKey: forge.pki.publicKeyToPem(keys.publicKey),
            csr: forge.pki.certificationRequestToPem(csr)
        }
    }

}