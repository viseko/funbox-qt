import React from 'react';
import declOfNum from '../../utils/declOfNum';

const Details = ({data}) => {
  const {mouses, portions, details} = data;

  const getMousesRow = () => {
    const num = (mouses > 1) ? <strong>{`${mouses} `}</strong> : null;
    const word = declOfNum(mouses, ['мышь', 'мыши', 'мышей']) + ' в подарок';
    return (
      <li>
        {num}{word}
      </li>
    );
  };

  const getPortionsRow = () => {
    const num = (portions > 1) ? <strong>{`${portions} `}</strong> : null;
    const word = declOfNum(portions, ['одна порция', 'порции', 'порций']);
    return (
      <li>
        {num}{word}
      </li>
    );
  };

  return (
    <ul className='card__details'>
      {getPortionsRow()}
      {getMousesRow()}
      {
        details.map((text, i) => 
          <li key={i}>{text}</li>
        )
      }
    </ul>
  );
};

export default Details;