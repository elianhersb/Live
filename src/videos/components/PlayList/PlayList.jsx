import { Header, Notification } from '../../../general';
import { Lesson } from '../Lesson/Lesson';

export const PlayList = () => {

    const playList = [
        {
            id: 1,
            status: 'PAUSED',
            name:'Lunes 07 de Noviembre',
            progress: 40,
            active: true,
        },
        {
            id: 2,
            status: 'INIT',
            name:'Martes 08 de Noviembre',
            progress: 0,
            active: false,
        },
        {
            id: 3,
            status: 'INIT',
            name:'Miércoles 09 de Noviembre',
            progress: 0,
            active: false,
        },
        {
            id: 4,
            status: 'INIT',
            name:'Jueves 10 de Noviembre',
            progress: 0,
            active: false,
        },
    ];

    const header = {
        name:'Videos',
        action:{
            icon:{
                path: '',
                show: false,
            },
            label:'',
            show: false,
        }
    }

    const notification = {
        name:'Daniel',
        date:'20/12/2023'
    };

    const message = <div> Estimado {notification.name}, recuerde que tiene hasta el <b>{notification.date}</b> para volver a repasar todas sus clases</div>;
    const list = playList.map( item => <Lesson key={item.id} {...item}/>); 
    return (
  
        <div className="container-content">

            <Header {...header} />
            <Notification notification={ message } />
            <div className="scroll">
                {list}
            </div> 

        </div>
        
            
            
      
    )
}
