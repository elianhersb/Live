export const Progressbar = ({progress}) => {
  return (
    <div className="container-progress">
        <div className="label">
        Reproduciendo
        </div>
        <div className="progressbar">
        <div className="bar"></div>
        <div className="porcent" style={ {width: progress+'%' }}></div>
        </div>
    </div>
  )
}
