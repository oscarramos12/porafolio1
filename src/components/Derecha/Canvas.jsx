import React, { useRef, useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Lluvia1 from './lluvia1.png'
import Lluvia2 from './lluvia2.png'
import Lluvia3 from './lluvia3.png'
import Final from './final.png'

const canvStyle = css`
position: absolute;
left: 960px;
height: 100vh;
width: 50vw;
background: #81bce8;
`
const finStyle = css`
position: absolute;
right: 0.1px;
`
class Left extends React.Component {
    constructor(props) {
      super(props)
      this.switchImage = this.switchImage.bind(this)
      this.state = {
        currentImage: 0,
        images: [Lluvia1, Lluvia2, Lluvia3],
      }
    }
  
    componentDidMount() {
      setInterval(this.switchImage, 500)
    }
  
    switchImage() {
      if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
          currentImage: this.state.currentImage + 1,
        })
      } else {
        this.setState({
          currentImage: 0,
        })
      }
      return this.currentImage
    }
  
    render() {
      return (
        <div className={canvStyle}>
            <img src={this.state.images[this.state.currentImage]} alt="lluvia" />
            <img className={finStyle} src={Final} alt="final" />
        </div>
      )
    }
  }

export default Left