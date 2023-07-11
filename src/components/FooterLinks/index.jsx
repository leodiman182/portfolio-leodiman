import Links from '../../utils/Links';
import './styles.scss';

export default function FooterLinks() {
  return (
    <ul className="social__media">
      {Links.map((obj) => (
        <li key={obj.name}>
          <a target="_blank" rel="noreferrer" href={obj.url}>
            {obj.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
