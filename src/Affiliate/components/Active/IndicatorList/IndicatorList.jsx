import { Indicator } from "../Indicator/Indicator"

export const IndicatorList = () => {
    const indicators = [
        {
            id:1,
            label: 'Balance',
            value: 200,
            unit: '$',
            status: true
        },
        {
            id:2,
            label: 'Conversaciones pend.',
            value: 20,
            unit: '',
            status: false
        },
    ]

    const list = indicators.map( indicator => <Indicator key={indicator.id} {...indicator}/>);

    return (
        <div className="list-indicator">

            { list }
        </div>
    )
}
