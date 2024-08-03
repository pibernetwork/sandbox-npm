import { render, screen } from '@testing-library/react';
import Home from './page'; // Adjust the import path as needed

// Mock the @npm/library module
jest.mock('@npm/library', () => ({
  InternalImport: jest.fn(() => 'Internal Content'),
  Library: jest.fn(() => 'Library Content'),
}));

describe('Home component', () => {
  it('renders the component with expected content', () => {
    render(<Home />);

    // Check if Library and InternalImport contents are rendered
    expect(screen.getByText('Library Content')).toBeInTheDocument();
    expect(screen.getByText('Internal Content')).toBeInTheDocument();
    expect(screen.getByText('Site')).toBeInTheDocument();
  });

  // Additional tests can be added here
});
