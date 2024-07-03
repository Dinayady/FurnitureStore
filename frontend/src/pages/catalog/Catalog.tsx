import { useState } from 'react';

import { mockCategory } from '../../mockData/mockCategory';
import { mockFurniture } from '../../mockData/mockFurniture';

import { Navigation } from '../../components/navigation/Navigation';
import { BtnCategory } from '../../components/buttonCategory/BtnCategory';
import { FurnitureCards } from '../../components/furnitureCard/FurnitureCards';
import { Footer } from '../../components/footer/Footer';

import style from './catalog.module.css';
import { FurnitureType } from '../../mockData/type/typeFurniture';

export const Catalog = () => {
  const [category, setCategory] = useState<string>();

  const filteredFurniture = mockFurniture.reduce((acc, item) => {
    if (!category || category === 'All') {
      acc.push(item);
    } else if (item.category === category) {
      acc.push(item);
    }
    return acc;
  }, [] as FurnitureType[]);

  return (
    <>
      <Navigation />
      <div className='container'>
        <div className={style.catalog}>
          <div className={style.button}>
            <h1 className='title'>Available now in the FStore</h1>
            <div className={style.btn}>
              {mockCategory.map((props) => (
                <BtnCategory
                  key={props.id}
                  props={props}
                  filtered={({ category }) => {
                    setCategory(category);
                  }}
                />
              ))}
            </div>
          </div>
          <div className={style.cards}>
            {filteredFurniture.map((props) => (
              <FurnitureCards
                key={props.id}
                img={props.img}
                price={props.price}
                title={props.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
