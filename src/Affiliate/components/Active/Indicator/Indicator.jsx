export const Indicator = ({ label, value, status, unit }) => {

    const active  = (status) ? 'container-indicator active' : 'container-indicator' 
    return (
        <div className={active}>
            <div className="label">
                { label }
            </div>
            <div className="value">
               { unit }{ value }
            </div>

        </div>
    )
}
