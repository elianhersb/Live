export const Item = ({ img, label}) => {
  return (
    <div className="container-items">
        <img className="icon" src={`${img}.svg`} alt={label} />
        <img className="icon-second" src={`${img}-green.svg`} alt={label} />
        <div className="label">{ label }</div>
    </div>
  )
}
