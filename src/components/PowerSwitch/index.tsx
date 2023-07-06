import './styles.scss';

type Props = {
  onClick?: React.MouseEventHandler;
};

export default function PowerSwitch({ onClick }: Props) {
  return (
    <>
      <div onClick={onClick} className="power-switch">
        <input type="checkbox" />
        <div className="button">
          <svg className="power-off">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
          <svg className="power-on">
            <use xlinkHref="#line" className="line" />
            <use xlinkHref="#circle" className="circle" />
          </svg>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="line"
        >
          <line x1="75" y1="34" x2="75" y2="58" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
          id="circle"
        >
          <circle cx="75" cy="80" r="35" />
        </symbol>
      </svg>
    </>
  );
}
