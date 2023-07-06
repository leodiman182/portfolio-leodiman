type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-black text-my-pink-300 border-my-pink-300 border-[2px] text-[20px] md:text-[26px] px-[30px] py-[8px] duration-150 hover:bg-my-pink-100 hover:border-my-pink-100 hover:text-black uppercase"
    >
      {props.text}
    </button>
  );
};

export default Button;
