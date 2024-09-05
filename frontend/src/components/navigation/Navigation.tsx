import { Link } from 'react-router-dom';

import { Paths } from '@/paths';
import { Input } from '@/components/input/Input';
import MainIcon from '@/assets/icons/logo.svg?react';
import CartIcon from '@/assets/icons/cart-nav.svg?react';
import UserIcon from '@/assets/icons/user-icon.svg?react';

import style from './navigation.module.css';

export const Navigation = () => {
  return (
    <ul className={style.nav}>
      <li>
        <Link to={Paths.main} className={style.logo}>
          <MainIcon className={style.logoImg} />
        </Link>
      </li>
      <li>
        <ul className={style.navigation}>
          <li>
            <Link to={Paths.about}>About</Link>
          </li>
          <li>
            <Link to={Paths.catalog}>Catalog</Link>
          </li>
          <li>
            <Link to={Paths.catalog}>Gallery</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul className={style.users}>
          <li>
            <Input />
          </li>
          <li>
            <Link to={Paths.cart}>
              <CartIcon className={style.logoImg} />
            </Link>
          </li>
          <li>
            <Link to={Paths.login}>
              <UserIcon className={style.logoImg} />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
