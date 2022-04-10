import { getByTestId, render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import {fireEvent} from '@testing-library/react'

test('renders TodoList Component', () => {
  render(<TodoList />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

test('Snapshot Test', () => {
    const {asFragment} = render(<TodoList/>)
    expect(asFragment()).toMatchSnapshot()
})

it('should render Todos with remove buttons', () => {
    const {queryAllByText} = render(<TodoList/>)
    expect(queryAllByText("X").length).toEqual(4)
})

it('should remove todo with Click on X Btn', () => {
    const {queryByText, queryByTestId} = render(<TodoList/>)
    expect(queryByText('Do the dishes')).toBeInTheDocument()
    const todoRemoveBtn = queryByTestId('Do the dishes')
    fireEvent.click(todoRemoveBtn)
    expect(queryByText('Do the dishes')).not.toBeInTheDocument()
})

it('Add a new Todo', () => {
    const {queryByTestId, getByLabelText, queryByText} = render(<TodoList/>)
    const todoInput = getByLabelText('Todo')
    const btn = queryByText('Add Todo!')
    
    expect(queryByText('Take out the trash')).not.toBeInTheDocument()
    fireEvent.change(todoInput, {target:{value: "Take out the trash"}})
    fireEvent.click(btn)
    expect(queryByText('Take out the trash')).toBeInTheDocument()
    

})