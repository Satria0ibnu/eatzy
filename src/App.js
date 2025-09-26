import React, { useState } from "react";
import "./styles/main.scss";
import Header from "./components/Header.js";
import MenuSection from "./components/menu/MenuSection.js";
import MenuCard from "./components/menu/MenuCard.js";
import CartItemList from "./components/cart/CartItemList.js";
import menuData from "./menuData.js";

function App() {
  const [menu, setMenu] = useState(menuData);
  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const cartItems = menu.filter((item) => item.quantity > 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setCustomerName(value);
    }
  };

  const handleOrderType = (type) => {
    if (customerName.trim() !== "") {
      setOrderType(type);
      setShowWelcome(false);
    } else {
      alert("Please enter your name first!");
    }
  };

  const handleIncrease = (id) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) => (item.id === id ? { ...item, quantity: 0 } : item))
    );
  };

  return (
    <div className='App'>
      {showWelcome && (
        <div className='overlay'>
          <div className='welcome-box'>
            <img
              src='/eatzy-logo-only-tp.png'
              alt='Eatzy Logo'
              className='logo'
            />
            <h2 className='title'>Eatzy</h2>
            <h3>Hello</h3>

            <div className='input-group'>
              <input
                type='text'
                value={customerName}
                onChange={handleInputChange}
                placeholder='Input your name here'
                className='name-input'
              />
            </div>

            <div className='button-group'>
              <button
                className={`option-btn ${
                  orderType === "Dine-in" ? "active" : ""
                }`}
                onClick={() => handleOrderType("Dine-in")}>
                Dine-in
              </button>
              <button
                className={`option-btn ${
                  orderType === "Take-away" ? "active" : ""
                }`}
                onClick={() => handleOrderType("Take-away")}>
                Take-away
              </button>
            </div>

            <p className='slogan'>Tasty Made Easy</p>
          </div>
        </div>
      )}

      {!showWelcome && (
        <>
          <Header username={customerName} orderType={orderType} />
          <main>
            <section className='menu-container'>
              {["food", "drink", "snack"].map((category) => (
                <MenuSection
                  key={category}
                  text={category.charAt(0).toUpperCase() + category.slice(1)}>
                  {menu
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        qty={item.quantity}
                        onIncrease={() => handleIncrease(item.id)}
                        onDecrease={() => handleDecrease(item.id)}
                      />
                    ))}
                </MenuSection>
              ))}
            </section>

            <section className='cart-container'>
              <h3>Cart</h3>
              <div className='list-album'>
                {cartItems.map((item) => (
                  <CartItemList
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    pricePerOne={item.price}
                    onDelete={() => handleDelete(item.id)}
                  />
                ))}
              </div>
              <div className='list-total text-section'>
                <div>Total</div>
                <div>Rp {totalPrice.toLocaleString("id-ID")}</div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
