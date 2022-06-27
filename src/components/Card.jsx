import React, { useEffect, useState } from 'react';
import declOfNum from '../utils/declOfNum';

const Card = ({data, className}) => {
  const {
    id,
    type,
    name,
    sort,
    mouses,
    portions,
    details,
    weight,
    description,
    available
  } = data;

  const [status, setStatus] = useState('default'); // default | selected | disabled
  const [classNames, setClassNames] = useState([className, 'card'].join(' '));
  const [isHover, setIsHover] = useState(false);
  const [isJustSelected, setIsJustSelected] = useState(false);

  const handleClick = (e) => {
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
      
      <label
        className='card__main'
        htmlFor={`food-card-${id}`}
        onMouseEnter={handleHover}
      >
        <h2 className='card__title'>
          <span className='card__type'>
            {
              ( status === 'selected' && isHover && !isJustSelected ) ?
                'Котэ не одобряет?' :
                type
            }
          </span>
          <span className='card__name'>
            {name}
          </span>
          <span className='card__sort'>
            {sort}
          </span>
        </h2>

        <ul className='card__details'>
          {getPortionsRow()}
          {getMousesRow()}
          {
            details.map((text, i) => 
              <li key={i}>{text}</li>
            )
          }
        </ul>

        <div className='card__image'></div>

        <div className='card__weight'>
          <span className='card__weight-number'>
            {weight.toString().replace('.', ',')}
          </span>
          кг
        </div>
      </label>

      <div className='card__bottom'>
        {
          (status === 'default') &&
            <span>
              Чего сидишь? Порадуй котэ,&nbsp;
              <label
                htmlFor={`food-card-${id}`}
                onMouseEnter={handleHover}
              >
                купи.
              </label>
            </span>
        }
        {
          (status === 'selected') &&
            <span>
             {description}.
            </span>
        }
        {
          (status === 'disabled') &&
            <span>
              Печалька, {sort} закончился.
            </span>
        }
      </div>
    </div>
  );
};

export default Card;