export const Navbar = () => {
  return (
    <div className="navbar">
      <div 
        className="container-navbar"
      >
        <img className="logout" src={'/assets/icon/logout.svg'} alt="logout" />
        <img className="logo" src={'/assets/img/logo.png'} alt="logo" />
        <div
          className="container-profile"
        >
          <img className="photo-profile" src={'/assets/img/perfil.jpg'} alt="profile" />
          <div className="indicator"></div>
        </div>

      </div>
    </div> 
  )
}
