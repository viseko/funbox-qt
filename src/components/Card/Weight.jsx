import React from 'react';

const Weight = ({weight}) => {
  return (
    <div className='card__weight'>
      <span className='card__weight-number'>
        {weight.toString().replace('.', ',')}
      </span>
      кг
    </div>
  );
};

export default Weight;