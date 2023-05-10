import { Item } from "./Item";

export const Linkbar = () => {
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
    <div className="linkbar">
      <div className="container-linkbar">
        { list }

        <div className="container-collapsed">
          <img className="icon" src={'/assets/icon/arrow-next.svg'} alt="collapsed" />
        </div>
      </div>
    </div>
  )
}
