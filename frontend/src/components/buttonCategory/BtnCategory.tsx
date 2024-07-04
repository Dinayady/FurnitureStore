import { CategoryType } from '../../mockData/type/typeCategory';

import style from './btnCategory.module.css';

type Props = {
  props: CategoryType;
  filtered: (data: { category: string }) => void;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const BtnCategory = ({ props, filtered, isActive, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    filtered({
      category: (e.target as HTMLElement)?.textContent ?? 'All',
    });
    onClick(e);
  };

  return (
    <button
      className={`${isActive ? style.active : style.button}`}
      onClick={(e) => handleClick(e)}
    >
      {props.title}
    </button>
  );
};
