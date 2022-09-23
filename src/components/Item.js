import React, { useState} from "react";

function Item({ name, category}) {
  const [isInCart, setIsInCart] = useState(false)

  function handleClick(){
    setIsInCart(!isInCart)
  }

  const itemClass = isInCart ? "in-cart" :  "not-in-cart"
  const btnText = isInCart ? "Add to Cart" : "Remove From Cart"


  
  return (

    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{btnText}</button>
    </li>
  );
}


export default Item;
