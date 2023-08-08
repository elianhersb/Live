export const Player = () => {
  return (
    <div className="player">
        <div className="container-player">

        </div>
        <div className="footer-player">
            <div className="container-sesion-date">
              <div className="container-logo">
                <img className="logo" src={'/assets/img/logo.png'} alt="logo" />
              </div>
              <div className="sesion-date">
                  Sesion del Lunes 14 de Nov.2022 
              </div>
            </div>
            <div className="conatiner-full-screen">
              <img className="icon" src={'/assets/icon/full-screen.svg'} alt="fullscreen" />
              <div className="label">Pantalla completa</div>
            </div>
        </div>
    </div>
  )
}
