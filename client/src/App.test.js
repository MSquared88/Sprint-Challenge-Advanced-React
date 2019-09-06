import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {replaceSpace} from './components/PlayerCards'
import { render, getByTestId, fireEvent, queryByText } from '@testing-library/react'


test("does the header say United States women's national soccer team", () => {
  const { container } = render(<App/>)
  const header = queryByText(container, "United States women's national soccer team")
  expect(header.textContent).toBe("United States women's national soccer team")
})

test("does the replace space with a  _ function work", () =>{
    expect(replaceSpace('firstName lastName')).toBe('firstName_lastName')
})