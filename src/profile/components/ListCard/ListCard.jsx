import { Card } from "../Card/Card"

export const ListCard = ({cards}) => {
    
    const list = cards.map(card => <Card key={card.id} {...card} />);
    
    return (
        <>{ list }</>
    )
}
