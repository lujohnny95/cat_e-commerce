import React from 'react';
import basket from '../images/basket.png';
;
export default function Navbar() {
  let price = 0;
  return (
    <nav class="navbar">
      <p class="navPcenter">
        <h1>Cats4Lyf</h1>
      </p>
      <p>
        <a href="#">
          <img src="/images/basket.png" class="logo" alt="logo" />£{price}
        </a>
      </p>
    </nav>
  );
}