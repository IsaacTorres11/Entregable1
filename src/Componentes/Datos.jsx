import React from 'react'

const Datos = ({datos}) => {
    console.log(datos);
    return (
        <div>
             <ul>
                <li>Nombre: {datos.nombre}</li>
                <li>Edad: {datos.edad}</li>
                <li>Pelicula Favorita: {datos.pelicula}</li>
                <li>Musica Favorita: {datos.musica}</li>
            </ul>
        </div>
    )
}

export default Datos
