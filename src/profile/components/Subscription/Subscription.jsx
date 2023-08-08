import { Switch } from "../../../general"

export const Subscription = () => {
  return (
    <div className="subscription">
        <div className="subscription-title">Suscripción de clase trading live</div>
        <div className="subscription-info">
            <div className="info">
                Tienes acceso a las clases semanales sin tener que volver a introducir los datos de tu 
                tarjeta nuevamente, ya que se hará un cobro semanal de 100$ automáticamente a la tarjeta
                VISA - XXX
            </div>
        </div>
        <div className="container-date">
            <img className="icon" src="/assets/icon/alert-white.svg" alt="alert" />
            <div className="date"> Fecha de próximo cobro 100$ - 19/12/2022</div>
        </div>

        <div className="subscription-stop">
            <div className="subscription-stop-container-info">
                <div className="subscription-stop-title">
                    Pausar suscripción
                </div>
                <div className="subscription-stop-info">
                    Podrás pausar tu suscripción y volver a activarla cuando lo necesites
                </div>
            </div>
            <Switch />
        </div>
    </div>
  )
}
