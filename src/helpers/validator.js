import { fields } from "./fields";

export const validateForm = (form) => {
    let errors = null;
    fields.forEach(function(field){
        const {name, required, pattern = null, error} = field;
        const value = form[name];
        if(required) {
            console.log(value);
            if(value.length === 0){
                errors = {...errors, [name]: 'Empty field'}
                
            }else if(pattern){
                const reg = new RegExp(pattern)
                if(!reg.test(value)){
                    errors = {...errors, [name]: error}
                }
            }
        }
    })
    return errors
}