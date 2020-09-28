import React from 'react'
import { render } from '../testUtils'
import Footer from '../../components/footer'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Footer publisher="foo" copyrightFromYear={1900} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
