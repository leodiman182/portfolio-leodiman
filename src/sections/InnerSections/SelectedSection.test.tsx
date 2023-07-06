import { renderHook } from '@testing-library/react';
import { PageProviderProps } from '../../context/PageContext/Types';
import PageProvider from '../../context/PageContext/Provider';
import { useContext } from 'react';
import { PageContext } from '../../context/PageContext/Context';
import { act } from 'react-dom/test-utils';

describe('The app should render', () => {
  test('the page home when selected', () => {
    const wrapper = ({ children }: PageProviderProps) => (
      <PageProvider>{children}</PageProvider>
    );

    const { result } = renderHook(() => useContext(PageContext), { wrapper });

    act(() => {
      result.current.setPage('home');
    });

    expect(result.current.page).toBe('home');
  });

  test('the page contact when selected', () => {
    const wrapper = ({ children }: PageProviderProps) => (
      <PageProvider>{children}</PageProvider>
    );

    const { result } = renderHook(() => useContext(PageContext), { wrapper });

    act(() => {
      result.current.setPage('contact');
    });

    expect(result.current.page).toBe('contact');
  });

  // test('the page contact and show its elements', () => {
  //   const wrapper = ({ children }: PageProviderProps) => (
  //     <PageProvider>{children}</PageProvider>
  //   );

  //   const { result } = renderHook(() => useContext(PageContext), { wrapper });

  //   act(() => {
  //     result.current.setPage('contact');
  //   });

  //   render(<SelectedSection />);
  //   const connectMessage = screen.getByText('Vamos nos conectar');

  //   expect(connectMessage).toBeInTheDocument();

  //   expect(result.current.page).toBe('contact');
  // });
});
