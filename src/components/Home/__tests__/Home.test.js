import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />)
  const linkElement = screen.getByText(/contact me/i)
  expect(linkElement).toBeInTheDocument()
})
