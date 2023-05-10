export const Card = ({img, title, description}) => {
  return (
    <div className="card" style={ {backgroundImage: `url(${img})` }}>
      <div className="card-title">
        { title } { img}
      </div>
      <div className="card-description">
        { description }
      </div>
    </div>
  )
}
