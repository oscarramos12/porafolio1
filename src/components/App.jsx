import React from 'react'
import { css } from '@emotion/css'
import Cosa from './Imagenes/v2.png'
import Nombre from './Nombre/Nombre'
import Bottom from './Fuego/Fuego'
import Canvas from './Derecha/Canvas'

const styles = css`
background-color: white;
`
const imagen = css`
position: relative;
top: 40px;
left:250px;
width: 45%;
`

const styles1 = {
  backgroundColor: 'black',
  width: '50vw',
  height: '100vh',
}
const styles2 = css`
position: absolute;
top: -0.1px;
width: 50vw;
height: 100vh;
`

const App = () => (
  <div className={styles}>
    <div style={styles1}>
      <Bottom />
      <Nombre />
      <img src={Cosa} alt="no se" className={imagen} />
    </div>
    <div div className={styles2}>
      <Canvas />
    </div>
  </div>
)
export default App
