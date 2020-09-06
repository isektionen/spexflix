import React from 'react'
import { render } from '../testUtils'
import Navigation from '../../components/navigation'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Navigation />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
