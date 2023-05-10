import { Item } from './Item';

export const Sidebar = () => {

  const items = [
    {
      id:1,
      label:'Vídeos',
      img:'/assets/icon/videos'
    },
    {
      id:2,
      label:'Recursos',
      img:'/assets/icon/resource'
    },
    {
      id:3,
      label:'Tienda',
      img:'/assets/icon/store'
    },
    {
      id:4,
      label:'Afiliados',
      img:'/assets/icon/affiliate'
    },
  ];

  const list = items.map( item => <Item key={item.id} {...item}/>);
  return (
    <div className="sidebar">
      <div className="container-sidebar">
          <div className="top-items">
            
            <div className="container-profile">
              <img className="profile" src={'/assets/img/perfil.jpg'} alt="perfil" />
              <div className="indicator">
                  <img className="icon" src={'/assets/icon/yellow-crown.svg'} alt="crown" />
              </div>
            </div>

            <div className="container-collapsed">
              <img className="icon" src={'/assets/icon/arrow-next.svg'} alt="collapsed" />
            </div>

            { list }

          </div>
          <div className="bottom-item">
            <img className="icon" src={'/assets/icon/logout.svg'} alt="logout" />
            <div className="label">Salir</div>
          </div>
      </div>
    </div>
  )
}
