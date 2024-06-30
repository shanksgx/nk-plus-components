import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import ScrollBar from '@/components/ScrollBar'

test('renders ScrollBar components', () => {  
  render(<ScrollBar />);  
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
})