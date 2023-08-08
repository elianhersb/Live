import { useState } from "react"
import { Category } from "../Category/Category"

export const Section = ({ title , categories, active}) => {
    const [status, setStatus ] = useState(active);

    const onToggleSection = () => {
        setStatus(!status);
    }

    const list = categories.map(category => <Category key={ category.id } { ...category } />)
    const icon = status ? 'arrow-up': 'arrow-down';
    return (
        <div className="section">
            <div className="section-content">
                <div className="section-title">
                    { title } 
                </div>
                <img className="icon" src={`/assets/icon/${icon}.svg`} alt="down" onClick={ onToggleSection }/>
            </div>
            <div className="section-categories">
                { status && list  }
            </div>
        </div>
    )
}
