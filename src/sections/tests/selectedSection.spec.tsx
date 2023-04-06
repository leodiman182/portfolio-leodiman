import { render, screen } from "@testing-library/react";
import PageProvider from "../../context/PageContext/Provider";
import App from "../../App";

describe('Selected section on mobile', () => {
  it('should render correctly the mobile version', () => {
    render(
      <PageProvider>
        <App />
      </PageProvider>
    )

    expect(screen.getByTestId('home-section-mobile')).toBeInTheDocument();
  });  
});

describe('Selected section on desktop', () => {
  it('should render correctly the desktop version', () => {
    render(
      <PageProvider>
        <App />
      </PageProvider>
    );

    expect(screen.getByTestId('home-section-desktop')).toBeInTheDocument();
  });
});

export {}