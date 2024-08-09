import { Schema } from 'joi';
import { Validator } from '../../domain/abstractions/validator/validator.interface';
import { ValidationResult } from '../../domain/abstractions/validator/validationResult.interface';
export class JoiValidator<T> implements Validator<T>{
    private readonly _schema: Schema;

    constructor(csrSubjectSchema: Schema){
        this._schema = csrSubjectSchema;
    }

    validate(data: T): ValidationResult<T> {
        const { error, value } = this._schema.validate(data);
        if(error){ return {error} }
        return { value }
    }
}