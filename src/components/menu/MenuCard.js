import React from "react";

const MenuCard = ({
  name,
  description,
  price,
  qty,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className='menu-card'>
      <h2>{name}</h2>
      <p>{description}</p>

      <div className='price'>{price}</div>

      <div className='actions'>
        <div className='qty-control'>
          <button onClick={onDecrease}>-</button>
          <div className='qty-display'>{qty}</div>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
