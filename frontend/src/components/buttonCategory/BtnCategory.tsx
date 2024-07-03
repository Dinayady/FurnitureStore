import { CategoryType } from '../../mockData/type/typeCategory';

import style from './btnCategory.module.css';

type Props = {
  props: CategoryType;
  filtered: (data: { category: string }) => void;
};

export const BtnCategory = ({ props, filtered }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    filtered({
      category: (e.target as HTMLElement)?.textContent ?? 'All',
    });
  };

  return (
    <button className={style.button} onClick={(e) => handleClick(e)}>
      {props.title}
    </button>
  );
};
