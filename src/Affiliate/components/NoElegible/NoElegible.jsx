import { Notification, Tab } from "../../../general"

export const NoElegible = () => {
    const message = <div> En este momento su cuenta no es elegible para aplicar a nuestro programa de afiliados. Si desea solicitar reevaluación por favor envie un Email a <b><u>afiliados@seminariocreandoriquezas.com</u></b></div>
    const tab = {
        label: 'No Elegible',
        icon: '/assets/icon/alert.svg'
    }
    return (
        <>
            <Tab {...tab} />
            <Notification  notification={ message } />
        </>
    )
}
