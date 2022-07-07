import { render, screen, fireEvent } from '@testing-library/react';
import MockParentElement from './manuSearch.mocks'

test('That it renders an input box', () => {
    render(<MockParentElement />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
});

test('When first rendered, the searchbox should be empty', () => {
    render(<MockParentElement />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toEqual('')
});

test('That the input box value changes when typed in', () => {
    render(<MockParentElement />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Test Input' } })
    expect(inputElement.value).toEqual('Test Input')
});
