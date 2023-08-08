export const Tab = ({icon, label}) => {
  return (
    <div className="tab">
        <div className="container-tab">
            <img className="icon" src={icon} alt="icon" />
            <div className="label">
                {label}
            </div>
        </div>
    </div>
  )
}
