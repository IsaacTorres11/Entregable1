import React from 'react'

const Comida = ({comida}) => {
    return (
        <div>
              <ul>
                <li>{comida.item1}</li>
                <li>{comida.item2}</li>
                <li>{comida.item3}</li>
                <li>{comida.item4}</li>
            </ul>
        </div>
    )
}

export default Comida
