export const Header = ({name, action}) => {
    const { icon, label } = action;

    return (
        <div className="header">
            
            <div className="container-header">

                <div className="label">
                    { name }
                </div>
                <div className="container-action">
                    <img className="icon" src={icon} alt={ label } />
                    <div className="action">
                        {label}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
