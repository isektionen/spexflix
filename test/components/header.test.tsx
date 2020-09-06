import React from 'react'
import { render } from '../testUtils'
import Header from '../../components/header'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header title="foo" />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
