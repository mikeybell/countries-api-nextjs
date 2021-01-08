/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './styles/card.module.css';
import { Country } from '../types';

const Card = ({
  name, population, region, capital, flag,
}: Country) => {
  const {
    container, img, header, info, item, value,
  } = styles;
  const formattedPop = population.toLocaleString('en');
  const slug = name.replaceAll(' ', '-');

  return (
    <Link href={`/${slug}`}>
      <a>
        <article className={container}>
          <img className={img} src={flag} alt={`The flag of ${name}`} />
          <div className={info}>
            <h2 className={header}>{name}</h2>
            <p className={item}>
              Population:
              <span className={value}>
                {' '}
                {formattedPop}
              </span>
            </p>
            <p className={item}>
              Region:
              <span className={value}>
                {' '}
                {region}
              </span>
            </p>
            <p className={item}>
              Capital:
              <span className={value}>
                {' '}
                {capital}
              </span>
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
