import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe("DesktopMenu", () => {
  
  it("should render correctly", () => {    
    render(<App />);
    const portfolioButton = screen.getByTestId("desktop-portfolio");
    
    expect(portfolioButton).toBeInTheDocument();
  });
  
  it("should change the page when clicking on an option", () => {
    render(<App />);
    const portfolioButton = screen.getByTestId("desktop-portfolio");

    fireEvent.click(portfolioButton);    

    expect(screen.getByTestId("portfolio-section")).toBeInTheDocument();
  })
});


export {}