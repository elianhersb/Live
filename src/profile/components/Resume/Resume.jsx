import { useState } from "react";
import { Bill } from "../Bill/Bill";

export const Resume = ({bills}) => {
    const [status, setStatus ] = useState(false);

    const onToggleSection = () => {
        setStatus(!status);
    }

    const list = bills.map(bill => <Bill key={bill.id} {...bill}/>) ; 
    const icon = status ? 'arrow-up': 'arrow-down';

    return (
        <div className="resume">
            <div className="resume-content">
                <div className="resume-title">
                    Resumen 2022
                </div>
                <img className="icon" src={`/assets/icon/${icon}.svg`} alt="down" onClick={ onToggleSection }/>
            </div>
            {status && list}
            
        </div>
    )
}
