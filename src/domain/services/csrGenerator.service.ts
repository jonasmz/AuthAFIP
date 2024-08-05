import forge from 'node-forge';
import { CsrResponseDto } from "../dtos/csrResponse.dto";
import { csrSubject } from "../entities/csrSubject .entity";
import { csrGenerator } from "../interfaces/csrGenerator.interface";

export class CsrGeneratorService implements csrGenerator {
    
    generateCsr(subjectEntity: csrSubject): CsrResponseDto {
        const keys = forge.pki.rsa.generateKeyPair(2048);
        const csrGenerated = forge.pki.createCertificationRequest();

        csrGenerated.publicKey = keys.publicKey;
        csrGenerated.setSubject([
            {
                name: 'commonName',
                value: subjectEntity.subject.commonName
            },
            {
                name: 'organizationName',
                value: subjectEntity.subject.organizationName
            },
            {
                name: 'serialNumber',
                value: subjectEntity.subject.serialNumber
            }
        ]);

        csrGenerated.sign(keys.privateKey);
        return {
            privateKey: forge.pki.privateKeyToPem(keys.privateKey),
            publicKey: forge.pki.publicKeyToPem(keys.publicKey),
            csr: forge.pki.certificationRequestToPem(csrGenerated)
        }
    }
    
}