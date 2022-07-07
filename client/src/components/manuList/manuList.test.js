import { render, screen } from '@testing-library/react';
import ManuList from './manuList.mocks'

test('It renders the unordered list', () => {
    render(<ManuList />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});

test('It renders two list items when given two manufacturers', () => {
    render(<ManuList />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(2);
});

test('It renders links inside the list', () => {
    render(<ManuList />);
    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(2)
});

test('It has both manufacturers listed', () => {
    render(<ManuList />);
    const augustElement = screen.getByText('August Storck KG DE')
    const cadburyElement = screen.getByText('Cadbury UK')
    expect(augustElement).toBeInTheDocument()
    expect(cadburyElement).toBeInTheDocument()
});
