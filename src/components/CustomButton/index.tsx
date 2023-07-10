import { Button, ThemeProvider } from '@mui/material';
import theme from '../../theme';

type BtnProps = {
  children: string;
  onClick?: () => void;
};

export default function CustomButtom(props: BtnProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={props.onClick} variant="contained">
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
