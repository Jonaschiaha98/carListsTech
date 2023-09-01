import logo from './logo.svg';
import React from 'react';
import handBurger from './hand-burger.png';
export default function Header(){
  const [handBurgerValue, setHandBurgerValue] = React.useState(false);
  function handleNav(){
     setHandBurgerValue(!handBurgerValue);  
  }
  {var classN = (handBurgerValue) ? ("nav dat") : ("dis")}
  
    return(
      <header className="header">
          <img src={logo} alt='logo' className='logo-image' />
          
          <div className={classN}>
            <ul className="nav-list">
              <li className="nav-item" onClick={handleNav}>HOME</li>
              <li className="nav-item" onClick={handleNav}>ABOUT</li>
              <li className="nav-item" onClick={handleNav}>DONATIONS</li>
              <li className="nav-item" onClick={handleNav}>NEWS</li>
              <li className="nav-item" onClick={handleNav}>OUR MISSION</li>
              <li className="nav-item" onClick={handleNav}>CONTACT US</li>
              <li className="nav-item" onClick={handleNav}><b>Donare Now</b></li>
            </ul>
          </div>
          
        <img src={handBurger} onClick={handleNav} className="hand-burger" alt="Menu" />
        </header>
      )
  
}