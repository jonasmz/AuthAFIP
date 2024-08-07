import { ValidationResult } from "./validationResult.interface";

export interface Validator<T>{
    validate(data: T): ValidationResult<T>;
}