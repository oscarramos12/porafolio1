import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import Under from './under.png'
import imgNombre from './namev2.png'

const styles1 = css`
position: relative;
top:65px;
color: white;
font-family: 'Crimson Text', serif;
font-size:50px;
text-align: center;
`
const styles2 = css`
top: 40px;
position: absolute;
right:100px;
width: 75%;
`

/* const Nombre = ({ nombre }) => (
  <div className={styles1}>
    {nombre}
    <img src={Under} alt="under" className={styles2} />
  </div>
      Esto va en App
      <Nombre nombre="Oscar Andres Ramos Maldonado" />


) */

const styleName = css`
position: relative;
top: -40px;
width: 80%;
`

const Nombre = () => (
  <div className={styles1}>
    <img src={imgNombre} alt="nombre" className={styleName} />
    <img src={Under} alt="under" className={styles2} />
  </div>
)

/* Nombre.propTypes = {
  nombre: PropTypes.string.isRequired,
} */

export default Nombre
