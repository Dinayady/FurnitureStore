import { Link } from 'react-router-dom';

import { Paths } from '../../paths';
import CartIcon from '../../assets/icons/cart.svg?react';

import style from './furnitureCards.module.css';

type Props = {
  title: string;
  price: number;
  img: string;
};

export const FurnitureCards = ({ title, price, img }: Props) => {
  return (
    <div className={style.cards}>
      <Link to={Paths.furniture} className={style.link}>
        <img src={img} alt={title} className={style.img} />
        <p className={style.title}>{title}</p>
      </Link>
      <div className={style.purchase}>
        <p className={style.price}>{price}$</p>
        <button className={style.btn}>
          <CartIcon className={style.icon} />
        </button>
      </div>
    </div>
  );
};
