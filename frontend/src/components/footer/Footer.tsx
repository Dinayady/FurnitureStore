import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

import style from './footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Link to={Paths.githubLink}>&#169; dm-gilmutdinova</Link>
    </div>
  );
};
