import { Notification, Tab } from "../../../general"
import { IndicatorList } from "./IndicatorList/IndicatorList"

export const Active = () => {
  const message = <div>Texto de referencia e información sobre los beneficios de los afiliados</div>
  const tab = {
      label: 'Activo',
      icon: '/assets/icon/check.svg'
  }
  return (
    <>
      <Tab {...tab} />
      <Notification notification={ message }/>
      <IndicatorList />
    </>
  )
}
