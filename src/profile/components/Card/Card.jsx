export const Card = () => {
  return (
    <div className="credit-card">
        <img className="icon" src="/assets/icon/star-green.svg" alt="start" />
        <div className={`container-card`}>
            <div className="info">
                <img className="icon" src="/assets/icon/credit-card.svg" alt="card" />
                <div className="number">XXXXX...2530</div> 
                <div className="separator">|</div>
                <div className="date">06/2023</div>
            </div>
            <img className="icon" src="/assets/icon/trash.svg" alt="trash" />
        </div>
    </div>
  )
}
