import { Btn, Notification, Tab } from '../../../general';
export const Elegible = () => {
  const message = <div>Texto de referencia e información sobre los beneficios de los afiliados</div>
  const tab = {
      label: 'Elegible',
      icon: '/assets/icon/alert.svg'
  }
  return (
    <>
      <Tab { ...tab } />
      <Notification notification={ message } />
      <Btn />
   
    </>
  )
}
