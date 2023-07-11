import Links from '../../utils/Links';
import './styles.css';

export default function FooterLink() {
  return (
    <div className="w-full">
      <ul className="social__media">
        {Links.map((obj) => (
          <li key={obj.name}>
            <a target="_blank" rel="noreferrer" href={obj.url}>
              {obj.icon}
            </a>
          </li>
          // <a
          //   className={`social ${obj.class}`}
          //   key={obj.name}
          //   href={obj.url}
          //   target="_blank"
          //   rel="noreferrer"
          // >
          //   {obj.icon}
          // </a>
        ))}
      </ul>
    </div>
  );
}
