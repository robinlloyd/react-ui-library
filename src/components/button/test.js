import React from 'react'
import { mount } from 'enzyme'

import { Button } from '.'

describe('<Button />', () => {
  const component = mount(<Button buttonType='button' text='Button text' />)

  it('should render without error', () => {
    expect(component).toBeTruthy()
  })

  it('should change state on hover', () => {
    expect(component.state().mouseOver).toBeFalsy()
    component.instance().handleMouseOver()
    expect(component.state().mouseOver).toBeTruthy()
  })

  it('should change state on mouse out', () => {
    expect(component.state().mouseOver).toBeTruthy() // Already set to true by above test.
    component.instance().handleMouseOut()
    expect(component.state().mouseOver).toBeFalsy()
  })
})

describe('<Button /> anchor type', () => {
  const component = mount(<Button buttonType='a' text='Button text' />)

  it('should render without error', () => {
    expect(component).toBeTruthy()
  })
})

describe('<Button /> input type', () => {
  const component = mount(<Button buttonType='input' text='Button text' />)

  it('should render without error', () => {
    expect(component).toBeTruthy()
  })
})
