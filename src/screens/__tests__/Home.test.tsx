import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '@screens/Home';

describe('Home', () => {
  it('should render the Home screen component correctly', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home-screen')).toBeDefined();
  });
});
