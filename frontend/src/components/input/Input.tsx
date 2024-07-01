import style from './input.module.css';

export const Input = () => {
  return (
    <>
      <input type='text' placeholder='Search...' className={style.input} />
    </>
  );
};
