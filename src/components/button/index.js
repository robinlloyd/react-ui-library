import React from 'react'
import {
  getButtonStyles,
  getButtonType,
  getButtonText,
  getInputProps
} from './helpers'

export class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseOver: false,
      mouseDown: false,
      focused: false
    }

    this.bindHandlers()
  }

  bindHandlers () {
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver () {
    this.setState({ mouseOver: true })
  }

  handleMouseOut () {
    this.setState({
      mouseOver: false,
      mouseDown: false
    })
  }

  render () {
    const ButtonType = this.props.buttonType
    const text = getButtonText(ButtonType, this.props.text)
    const inputTypeProps = getInputProps(ButtonType, this.props.text)

    return (
      <ButtonType
        style={getButtonStyles()}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        {...inputTypeProps}
      >
        {text}
      </ButtonType>
    )
  }
}
