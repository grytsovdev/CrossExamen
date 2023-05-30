import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorService } from "../validator.service";

export function intValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): {
        [key: string]: boolean
    } | null => {
        let validator = new ValidatorService()
        let valid = !control.value || validator.validateInt(control.value);
        return valid ? null : { facultyPhoneNumber: true }
    }
}