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
        fontSize: '18px',
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderRadius: '0px',
        '&:hover, &.Mui-focusVisible': {
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