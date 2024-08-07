import { asClass, asValue } from "awilix";
import { diContainer } from "../interfaces/diContainer.interface";
import { CsrGeneratorService } from "../../../domain/services/csrGenerator.service";
import { CsrGeneratorModel } from "../../../domain/models/csrGenerator.model";
import { CsrGeneratorJsonPresenter } from "../../../application/presenters/csrGenerator/csrGenerator.json.presenter";
import { CsrGeneratorController } from '../../../application/controllers/csrGenerator.controller';
import { JoiValidator } from "../../validator/joi.validator";
import { csrSubjectDto } from '../../../domain/dtos/csrGenerator/csrSubject.dto';
import { csrSubjectSchema } from "../../validator/schemas/csrSubject.schema";

export const csrGeneratorDependenciesLoader = (container: diContainer)=>{
    
    
    container.register('csrGeneratorService', asClass(CsrGeneratorService).scoped());
    container.register('csrGeneratorOutputPort', asClass(CsrGeneratorJsonPresenter).scoped());
    container.register('csrGeneratorInputPort', asClass(CsrGeneratorModel).scoped());
    container.aliasTo('csrGeneratorPresenter', 'csrGeneratorOutputPort');
    container.register('csrGeneratorController', asClass(CsrGeneratorController).scoped());
    container.register('csrValidator', asClass(JoiValidator<csrSubjectDto>).scoped());
    container.register('csrSubjectSchema', asValue(csrSubjectSchema));


}