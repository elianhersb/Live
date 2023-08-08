export const Product = ({ img, title, description }) => {
  return (
    <div className="product">

        <div className="container-product" style={ {backgroundImage: `url(${img})` }}>
            <div className="product-title">{ title }</div>
            <div className="product-description">{ description }</div>
        </div>
        <div className="product-btn">
            Comprar ahora
        </div>
    </div>
  )
}
