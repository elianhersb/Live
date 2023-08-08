import { Dynamic, Header } from "../../general"
import { ListCard, Resume, Subscription } from "../components";

export const ProfilePage = () => {
    const headers =[
      {
        name:'Perfil',
        action:{
          icon:{
            path:'',
            show:false,
          },
          label:'Editar',
          show: true,
        }
      },
      {
        name:'Mi suscripción',
        action:{
          icon:{
            path:'',
            show:false,
          },
          label:'Cancelar',
          show: true,
        }
      },
      {
        name:'Mis Facturas',
        action:{
          icon:{
            path:'',
            show:false,
          },
          label:'',
          show: true,
        }
      },
      {
        name:'Medios de Pago',
        action:{
          icon:{
            path:'',
            show:false,
          },
          label:'Agregar tarjeta',
          show: true,
        }
      },
    ];

    const profileForm = [
      {
        id: 'name',
        type: 'text',
        placeHolder:'Ingrese su nombre',
        value:'Daniel Apellido',
        disabled: true,
        label:{
          show: true,
          value: 'Nombre',
        },
      },
      {
        id: 'email',
        type: 'email',
        placeHolder:'Ingrese su email',
        value:'daniel@gmail.com',
        disabled: true,
        label:{
          show: true,
          value: 'Email',
        },
      },
      {
        id: 'phone',
        type: 'text',
        placeHolder:'Ingrese su teléfono',
        value:'',
        disabled: true,
        label:{
          show: true,
          value: 'Teléfono',
        },
      },
      {
        id: 'password',
        type: 'password',
        placeHolder:'Ingrese su contraseña',
        value:'151',
        disabled: true,
        label:{
          show: true,
          value: 'Contraseña',
        },
      },

    ]

    const profileButton ={
      show: false,
      label: ''
    }

    const cards = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ]

    const bills = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ] 
    return (
        <div className="container-content">

          <Header {...headers[0]} />
          <div className="scroll">

            <Dynamic inputs={ profileForm } button={ profileButton }/>
            <Header {...headers[1]} />
            <Subscription />
            <Header {...headers[2]} />
            <Resume bills={bills}/>
            <Header {...headers[3]} />
            <ListCard cards={ cards }/>
          </div>

        </div>
    )
}
