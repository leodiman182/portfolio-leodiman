import Button from '@mui/material/Button';

type MuiButtonProps = {
  text: string,
  onClick: () => void;
}

const MuiButton = (props: MuiButtonProps) => {
  return (
    <Button
      className='text-[20px] text-my-pink-300 border-my-pink-300 rounded-[0] border-[2px] hover:border-my-pink-100 hover:text-my-pink-100'
      onClick={props.onClick}
      variant="outlined"
    >
      { props.text }
    </Button>
  );
}

export default MuiButton; 