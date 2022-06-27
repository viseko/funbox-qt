import React, { useEffect, useState } from 'react';
import Bottom from './Card/Bottom';
import Main from './Card/Main';

const Card = ({data, className}) => {
  const { id, available } = data;

  const [status, setStatus] = useState('default'); // default | selected | disabled
  const [classNames, setClassNames] = useState([className, 'card'].join(' '));
  const [isHover, setIsHover] = useState(false);
  const [isJustSelected, setIsJustSelected] = useState(false);

  const handleClick = () => {
    setStatus(status === 'default' ? 'selected' : 'default');
    
    setIsJustSelected(true);
  };

  const handleHover = () => {
    if (status === 'disabled') return;
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    if (status === 'disabled') return;

    setIsHover(false);

    if (isJustSelected) {
      setIsJustSelected(false);
    }
  };

  useEffect(() => {
    setStatus(available ? 'default' : 'disabled');
  }, [available]);

  useEffect(() => {
    const defaultClass = 'card';
    let modificator = '';

    if (status === 'disabled') {
      modificator = 'card--disabled';
    }

    if (status === 'default') {
      modificator = (isHover) ? 'card--hover' : '';
    }

    if (status === 'selected' && !isHover) {
      modificator = 'card--selected';
    }
    
    if (status === 'selected' && isHover) {
      modificator = (isJustSelected) ? 'card--selected' : 'card--selected-hover';
    }

    setClassNames([className, defaultClass, modificator].join(' '));
  }, [status, isHover, isJustSelected, className]);

  return (
    <div
      className={classNames} 
      onMouseLeave={handleMouseLeave}
    >
      <input
        className='visually-hidden'
        type='checkbox'
        name='food-cards'
        value={`food-card-${id}`}
        id={`food-card-${id}`}
        onChange={handleClick}
        checked={status === 'selected'}
        disabled={status === 'disabled'}
      />
      
      <Main
        data={data}
        status={status}
        isHover={isHover}
        isJustSelected={isJustSelected}
        handleHover={handleHover}
      />

      <Bottom
        data={data}
        status={status}
        handleHover={handleHover}
       />
    </div>
  );
};

export default Card;