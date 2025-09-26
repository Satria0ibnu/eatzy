// import "./App.css";
import "./styles/main.scss";
import { useState } from "react";
import { translations } from "./lang.js";
import Header from "./components/Header.js";
import InitialModal from "./components/InitialModal.js";
import MenuSection from "./components/menu/MenuSection.js";
import MenuCard from "./components/menu/MenuCard.js";
import CartItemList from "./components/cart/CartItemList.js";
import menuData from "./menuData.js";

function App() {
  const [menu, setMenu] = useState(menuData);
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  const [cart, setCart] = useState([]);

  return (
    <div className='App'>
      <Header></Header>
      <main>
        <section className='menu-container'>
          <MenuSection text='Food'>
            {menu
              .filter((item) => item.category === "Food")
              .map((item, index) => (
                <MenuCard key={index} name={item.name} />
              ))}
          </MenuSection>

          <MenuSection text='Drink'>
            {menu
              .filter((item) => item.category === "Drink")
              .map((item, index) => (
                <MenuCard key={index} name={item.name} />
              ))}
          </MenuSection>
          <MenuSection text='Snack'>
            {menu
              .filter((item) => item.category === "Snack")
              .map((item, index) => (
                <MenuCard key={index} name={item.name} />
              ))}
          </MenuSection>
        </section>
        <section className='cart-container'>
          <h3>Cart</h3>
          <CartItemList></CartItemList>
        </section>
      </main>
      {/* <div>
        <div>
          <button onClick={() => setLang("en")}>English</button>
          <button onClick={() => setLang("id")}>Bahasa Indonesia</button>
        </div>
        <h1>{t.welcome}</h1>
        <button>{t.checkout}</button>
      </div> */}
      {/* <InitialModal></InitialModal> */}
    </div>
  );
}

export default App;
