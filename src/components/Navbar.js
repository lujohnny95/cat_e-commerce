import React from 'react';

export default function Navbar() {
  let price = 0;
  return (
    <div class="topnav">
      <a class="active">Cats4Lyf.co.uk</a>
      <a href="#" class="right">
        <img class="basket_img" src="/images/basket.png"></img>
        {price}
      </a>
    </div>
  );
}