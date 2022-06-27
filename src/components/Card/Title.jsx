import React from 'react';

const Title = (props) => {
  const {status, isHover, isJustSelected} = props;
  const {name, sort, type} = props.data;

  return (
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
  );
};

export default Title;