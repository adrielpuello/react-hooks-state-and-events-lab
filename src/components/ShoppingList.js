import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({items}) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((thingy) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return thingy.category === selectedCategory;
    }
  })
  
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          // onClick={() => handleLiClick(item.id)}
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
