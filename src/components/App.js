import React, { useState } from "react";
import Filter from "./components/Filter";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { v4 as uuid } from "uuid";
import initialItems from "./data"; // if you have a data.js file

function App() {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={search} onSearchChange={setSearch} />
      <ItemList items={itemsToDisplay} />
    </div>
  );
}

export default App;