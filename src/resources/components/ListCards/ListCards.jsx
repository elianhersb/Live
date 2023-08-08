import { Header } from "../../../general";
import { Card } from "./Card/Card";

export const ListCards = () => {
  const header = {
      name:'Para ti',
      action:{
        icon:{
          path: '',
          show: false,
        },
        label:'',
        show: false,
      }
  }

  const cards = [
    {
      id:10,
      img:'/assets/img/callcenter.jpg',
      title:'title 1',
      description:'description 1',
    },
    {
      id:20,
      img:'/assets/img/callcenter.jpg',
      title:'title 2',
      description:'description 2',
    },
    {
      id:30,
      img:'/assets/img/callcenter.jpg',
      title:'title 3',
      description:'description 3',
    },
    {
      id:40,
      img:'/assets/img/callcenter.jpg',
      title:'title 4',
      description:'description 4',
    },

  ]

  const list = cards.map( card => <Card key={card.id} {...card }/> );

  return (
    <div className="container-content">

      <Header {...header} />
      <div className="scroll">
        { list }
      </div> 

    </div>
  )
}
