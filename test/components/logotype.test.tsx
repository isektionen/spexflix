import React from 'react'
import { render } from '../testUtils'
import Logotype from '../../components/logotype'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Logotype text="fOo" />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
