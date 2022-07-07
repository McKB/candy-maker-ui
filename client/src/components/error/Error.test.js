import { render, screen } from '@testing-library/react'
import Error from './Error'

test('The error page renders successfully', () => {
    render(<Error />)
    const errorElement = screen.getByText("Sorry, page does not exist!")
    expect(errorElement).toBeInTheDocument()
})