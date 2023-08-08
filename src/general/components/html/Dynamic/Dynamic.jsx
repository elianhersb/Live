import { InputGeneral } from "../Inputs/InputGeneral/InputGeneral";

export const Dynamic = ({inputs, button}) => {
    
    const btn = (button.show) ? <button>{button.label}</button> : <></>;
    
    const inputGroup = inputs.map(input => {
        if(
            input.type == 'text'    || 
            input.type == 'email'  || 
            input.type == 'number'  || 
            input.type == 'password'
        ){
            return <InputGeneral key={input.id} {...input} /> ;
        }
    
    });
    
    return (
        <form
            className="container-form" 
            action="">
            { inputGroup }
            { btn }
        </form>
    )
}
