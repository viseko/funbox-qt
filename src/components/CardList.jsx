import React from 'react';
import Card from './Card';

const CardList = ({data}) => {
  return (
    <div className='card-list'>
      {
        data.map((cardData, i) =>
          <Card
            className='card-list__card'
            key={i}
            data={cardData}
          />
        )
      }
    </div>
  );
};

export default CardList;