import { Header } from "../../../general";
import { Product } from "./Product/Product";

export const ListProducts = () => {
  const header = {
      name:'Tienda',
      action:{
        icon:{
          path: '',
          show: false,
        },
        label:'',
        show: false,
      }
  }

  const products = [
    {
      id:1,
      img:'/assets/img/libros.jpg',
      title:'Ttulo numero uno Largo para maquetar',
      description:'Descripcion del producto uno',
    },
    {
      id:2,
      img:'/assets/img/libros.jpg',
      title:'Ttulo numero dos Largo para maquetar',
      description:'Descripcion del producto dos',
    },
    

  ]

  const list = products.map( product => <Product key={product.id} {...product }/> );

  return (
    <div className="container-content">

      <Header {...header} />
      <div className="scroll">
        { list }
      </div> 

    </div>
  )
}
