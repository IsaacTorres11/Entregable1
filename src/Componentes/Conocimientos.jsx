import React from 'react'

const Conocimientos = ({conocimientos}) => {
    return (
        <div>
            <ul>
                <li>{conocimientos.item1}</li>
                <li>{conocimientos.item2}</li>
                <li>{conocimientos.item3}</li>
                <li>{conocimientos.item4}</li>
            </ul>
        </div>
    )
}

export default Conocimientos
