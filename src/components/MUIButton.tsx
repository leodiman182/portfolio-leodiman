import Button from '@mui/material/Button';
import theme from '../theme';

type MuiButtonProps = {
  text: string,
  onClick: () => void;
}

const MuiButton = (props: MuiButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      sx={{
        fontSize: '20px',
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderRadius: '0px',
        borderWidth: '2px',
        '&:hover, &.Mui-focusVisible': {
          borderWidth: '2px',
          color: theme.palette.primary.light,
          borderColor: theme.palette.primary.light
        }
      }}
    >
      { props.text }
    </Button>
  );
}

export default MuiButton; 