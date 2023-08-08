import { Header } from "../../general"
import { Active, Elegible, NoElegible } from "../components"

export const AfilliatePage = () => {

    const header = {
        name:'Afiliado',
        action:{
            icon:{
                path:'',
                show:false,
            },
            label:'',
            show: false,
        }
    }

    return (
        <div className="container-content">

            <Header {...header} />
            {/* <NoElegible /> */}
            <Elegible />
            <Active />

        </div>
    )
}
