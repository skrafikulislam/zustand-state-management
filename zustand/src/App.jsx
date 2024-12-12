import "./App.css";

import ItemList from "./ItemList";
import CartItemsRender from "./CartItemsRender";

function App() {
  return (
    <>
      <div>
        <ItemList />
        <div>
          <h1>Cart Items</h1>
          <CartItemsRender />
        </div>
      </div>
    </>
  );
}

export default App;
