import { NavLink } from 'react-router-dom';

export const Breadcrumbs = ({data}) => {

    const list = data.map( (item, index )=> {
        let last = data.length - 1;
        return (last == index) ? 
            <div className="item" key={item.id}> <div className="name active">{ item.name }</div></div> : 
            <NavLink to={item.url} className="item" key={item.id}> <div className="name">{ item.name }</div> <img className="icon" src="/assets/icon/arrow-left-gray.svg" alt="back" /></NavLink> 
  
    });

    return (
    <div className="breadcrumbs">
       
        { list }

    </div>
  )
}
