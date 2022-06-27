import React from 'react';

const Bottom = (props) => {
  const {status, handleHover} = props;
  const {id, description, sort} = props.data;

  return (
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
  );
};

export default Bottom;