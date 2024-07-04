import { Link } from 'react-router-dom';

import { Paths } from '@/paths';
import { mockFurniture } from '@/mockData/mockFurniture';
import { Navigation } from '@/components/navigation/Navigation';
import { FurnitureCards } from '@/components/furnitureCard/FurnitureCards';
import { Footer } from '@/components/footer/Footer';

import style from './main.module.css';

const ARRAY_LENGTH = 6;

export const Main = () => {
  const previewFurniture = mockFurniture.slice(0, ARRAY_LENGTH);

  return (
    <>
      <Navigation />
      <div className='container'>
        <div className={style.header}>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Get the Home</h1>
              <h1>of your dreams</h1>
            </div>
            <h2 className={style.subtitle}>
              Find a wide range of high-quality furniture to fit your home and
              your needs. From cozy armchairs to modern dining tables, we've got
              it all.
            </h2>
            <div className={style.line}></div>
            <p>
              Browse our catalog and contact us with any questions – we're here
              to help!
            </p>
            <span>
              <Link to={Paths.catalog} className={style.btn}>
                Let's start
              </Link>
            </span>
          </div>
          <div className={style.image}></div>
        </div>
      </div>
      <div className={style.catalogContainer}>
        <div className='container'>
          <div className={style.catalog}>
            <div className={style.furniture}>
              {previewFurniture.map((props) => (
                <FurnitureCards
                  key={props.id}
                  title={props.title}
                  price={props.price}
                  img={props.img}
                />
              ))}
            </div>
            <span>
              <Link to={Paths.catalog} className={style.btn}>
                Let's start
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
