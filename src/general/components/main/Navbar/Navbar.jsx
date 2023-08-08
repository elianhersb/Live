import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div 
        className="container-navbar"
      >
        <img className="logout" src={'/assets/icon/logout.svg'} alt="logout" />
        <img className="logo" src={'/assets/img/logo.png'} alt="logo" />

        <NavLink 
          className={({isActive}) => `container-profile ${ isActive ? 'active' : '' }`}
          to={'/perfil'}
        >
          <img className="photo-profile" src={'/assets/img/perfil.jpg'} alt="perfil" />
          <div className="indicator"></div>
        </NavLink>

      </div>
    </div> 
  )
}
