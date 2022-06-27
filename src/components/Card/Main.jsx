import React from 'react';
import Details from './Details';
import Title from './Title';
import Weight from './Weight';

const Main = (props) => {
  const {status, isHover, isJustSelected, handleHover} = props;
  const {id, weight} = props.data;

  return (
    <label
        className='card__main'
        htmlFor={`food-card-${id}`}
        onMouseEnter={handleHover}
      >
      <Title
        data={props.data} 
        status={status}
        isHover={isHover}
        isJustSelected={isJustSelected}
      />
      <Details data={props.data} />
      <div className='card__image'></div>
      <Weight weight={weight} />
    </label>
  );
};

export default Main;