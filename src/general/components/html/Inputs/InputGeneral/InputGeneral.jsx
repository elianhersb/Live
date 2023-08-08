export const InputGeneral = ({label, id, placeHolder, value, type, disabled}) => {

    const  labelInput = (label.show)?  <label className="label-input-general" htmlFor={id}>{label.value}</label>: <></>;

    return (
        <div className={`container-input-general ${(disabled)? 'disabled': ''}`}>
            {labelInput}
            <input 
                className="input-general"
                type={type} 
                placeholder={placeHolder}
                value={value}
                id={id}
                name={id}
                disabled={disabled}
            />
        </div>
    )
}
