import { NavLink } from 'react-router-dom';

export const Itembar = ({ img, label, url}) => {
  return (
    <NavLink 
      className={({isActive}) => `container-items ${ isActive ? 'active' : '' }`}
      to={url}
      >
  
      <img className="icon" src={`${img}.svg`} alt={label} />
      <img className="icon-second" src={`${img}-green.svg`} alt={label} />
      <div className="label">{ label }</div>
    </NavLink>
  )
}
