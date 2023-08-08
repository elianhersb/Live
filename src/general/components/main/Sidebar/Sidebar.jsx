import { Itembar } from '../Itembar/Itembar';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed(!collapsed);
  }

  const items = [
    {
      id:1,
      label:'Vídeos',
      img:'/assets/icon/videos',
      url:'/videos'
    },
    {
      id:2,
      label:'Recursos',
      img:'/assets/icon/resource',
      url:'/'
    },
    {
      id:3,
      label:'Tienda',
      img:'/assets/icon/store',
      url:'/tienda'
    },
    {
      id:4,
      label:'Afiliados',
      img:'/assets/icon/affiliate',
      url:'/afiliado'
    },
  ];

  const list = items.map( item => <Itembar key={item.id} {...item}/>);
  return (
    <div className={`sidebar ${ collapsed ? 'active' : '' } `}>
      <div className="container-sidebar">
          <div className="top-items">
            <NavLink 
              className={({isActive}) => `container-profile ${ isActive ? 'active' : '' }`}
              to={'/perfil'}
            >
              <img className="profile" src={'/assets/img/perfil.jpg'} alt="perfil" />
              <div className="indicator">
                  <img className="icon" src={'/assets/icon/yellow-crown.svg'} alt="crown" />
              </div>
            </NavLink>
            
            <div className="container-collapsed" onClick={ onToggle }>
              <img className="icon" src={`/assets/icon/${ collapsed ? 'arrow-next' : 'arrow-back' }.svg`} alt="collapsed" />
            </div>

            { list }

          </div>
          <div className="bottom-item">
            <div className="container-movil-collapsed" onClick={ onToggle }>
              <img className="icon" src={`/assets/icon/${ collapsed ? 'arrow-back' : 'arrow-next' }.svg`} alt="collapsed" />
            </div>
            <img className="icon" src={'/assets/icon/logout.svg'} alt="logout" />
            <div className="label">Salir</div>
          </div>
      </div>
    </div>
  )
}
