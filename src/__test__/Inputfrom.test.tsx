import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Inputform from '../components/Inputform';

describe('renders componets', () => {
  test('Inputform renders', () => {
    render(<Inputform navigate={undefined} handleclick={() => {}} />);
    screen.debug();
  });
  test('button exits', () => {
    const component = render(
      <Inputform navigate={undefined} handleclick={() => {}} />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('button snapshot', () => {
    const component = render(
      <Inputform navigate={undefined} handleclick={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
