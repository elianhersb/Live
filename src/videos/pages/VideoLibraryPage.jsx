import { Breadcrumbs, Header } from "../../general";
import { Section } from "../components/Section/Section";
import { useNavigate } from "react-router-dom";

export const VideoLibraryPage = () => {
    
  const sections = [
        {
            id: 1,
            title:'section 01 - videos',
            active: false,
            categories:[
                {
                    id: 1,
                    title:' Videos relacionados por categorias',
                    items:[
                        {
                            id:1,
                            title:'Video 1',
                            status:'INIT',
                            time:20,
                        },
                        {
                          id:2,
                          title:'Video 2',
                          status:'INIT',
                          time:30,
                      }
                    ]
                },
                {
                  id: 2,
                  title:' Videos relacionados por categorias 2',
                  items:[
                      {
                          id:1,
                          title:'Video 1',
                          status:'INIT',
                          time:20,
                      },
                      {
                        id:2,
                        title:'Video 2',
                        status:'INIT',
                        time:30,
                    },
                    {
                      id:3,
                      title:'Video 2',
                      status:'INIT',
                      time:40,
                    }
                  ]
                },
                {
                  id: 3,
                  title:' Videos relacionados por categorias 2',
                  items:[
                      {
                          id:1,
                          title:'Video 1',
                          status:'INIT',
                          time:20,
                      },
                      {
                        id:2,
                        title:'Video 2',
                        status:'INIT',
                        time:30,
                    },
                    {
                      id:3,
                      title:'Video 2',
                      status:'INIT',
                      time:40,
                    }
                  ]
                }
            ]
        },
        {
          id: 2,
          title:'section 02 - videos',
          active: false,
          categories:[
            {
                id: 1,
                title:' Videos relacionados por categorias',
                items:[
                    {
                        id:1,
                        title:'Video 1',
                        status:'INIT',
                        time:20,
                    },
                    {
                      id:2,
                      title:'Video 2',
                      status:'INIT',
                      time:30,
                  }
                ]
            },

          ]
        },
        {
          id: 3,
          title:'section 03 - videos',
          active: false,
          categories:[
            {
                id: 1,
                title:' Videos relacionados por categorias',
                items:[
                    {
                        id:1,
                        title:'Video 1',
                        status:'INIT',
                        time:20,
                    },
                    {
                      id:2,
                      title:'Video 2',
                      status:'INIT',
                      time:30,
                  }
                ]
            },

          ]
        },
        {
          id: 4,
          title:'section 04 - videos',
          active: false,
          categories:[
            {
                id: 1,
                title:' Videos relacionados por categorias',
                items:[
                    {
                        id:1,
                        title:'Video 1',
                        status:'INIT',
                        time:20,
                    },
                    {
                      id:2,
                      title:'Video 2',
                      status:'INIT',
                      time:30,
                  }
                ]
            },

          ]
        }
    ];

    const header = {
        name:'Libreria de Videos',
        action:{
          icon:{
            path: '/assets/icon/back-gray.svg',
            show: true,
          },
          label:'Volver',
          show: true,
        }
    }

    const bread =[
      {
        id:1,
        name:'Videos',
        url:'/videos'
      },
      {
        id:2,
        name:'Libreria de Videos',
        url:'',
      },
    ];

    const navigate = useNavigate();
    
    const back = () => {
      navigate(-1);
    }

    const list = sections.map(section => <Section key={section.id} {...section} />)
    
    return (
      <div className="container-content">

        <Header {...header}  onAction={back}/>
        <Breadcrumbs data={bread}/>
        <div className="scroll">
          { list }
        </div> 

      </div>
    )
}
