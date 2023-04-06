import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer-element')).toBeInTheDocument();
  });
});

export {}