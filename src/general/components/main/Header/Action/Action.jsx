export const Action = ({icon , label, onAction}) => {
  const showIcon = (icon.show) ? <img className="icon" src={icon.path} alt={ label } />: ''; 
  return (
    <div className="container-action" onClick={ onAction }>
        { showIcon }
        <div className="action">
            {label}
        </div>
    </div>
  )
}
