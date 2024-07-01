import style from './btnCategory.module.css';

type Props = {
  title: string;
};

export const BtnCategory = ({ title }: Props) => {
  return <button className={style.button}>{title}</button>;
};
