import React from 'react'

import { Button } from '../src/components'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h2>Buttons</h2>
        <hr />
        <Button buttonType='button' text='Button' />
        <Button buttonType='a' text='Anchor' />
        <Button buttonType='input' text='Input' />
      </div>
    )
  }
}
