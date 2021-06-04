import React from 'react'
import { css } from '@emotion/css'
import Fuego1 from './fire1.png'
import Fuego2 from './fire2.png'
import Fuego3 from './fire3.png'

const styleImg = css`
position: absolute;
top: 66px;
`

class Bottom extends React.Component {
  constructor(props) {
    super(props)
    this.switchImage = this.switchImage.bind(this)
    this.state = {
      currentImage: 0,
      images: [Fuego1, Fuego3, Fuego2],
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
      <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
          className={styleImg}
        />
      </div>
    )
  }
}
export default Bottom
