import { Action } from "./Action/Action";

export const Header = ({name, action, onAction}) => {
    const { show } = action;
    const  haveAction = ( show ) ? <Action  {...action} onAction={onAction} /> : '';
    
    return (
        <div className="header">
            
            <div className="container-header">

                <div className="label">
                    { name }
                </div>
                { haveAction }
                
            </div>
        </div>
    )
}
