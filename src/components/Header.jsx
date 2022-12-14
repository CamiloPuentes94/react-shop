import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder  from '@containers/MyOrder';

import icon_menu from'@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';


const Header = () => {

  const[toggle, setToggle] = useState(false);
  const[toggleOrders, setToggleOrders] = useState(false)
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo_yard_sale} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/react-shop">All</a>
          </li>
          <li>
            <a href="/react-shop">Clothes</a>
          </li>
          <li>
            <a href="/react-shop">Electronics</a>
          </li>
          <li>
            <a href="/react-shop">Furnitures</a>
          </li>
          <li>
            <a href="/react-shop">Toys</a>
          </li>
          <li>
            <a href="/react-shop">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={ handleToggle }>
            React-Shop
          </li>
          <li 
            className="navbar-shopping-cart" 
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder
        toggleOrders={toggleOrders}
        setToggleOrders={setToggleOrders}
      />}
    </nav>
  );
}

export default Header;