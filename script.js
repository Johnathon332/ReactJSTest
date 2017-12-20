import React from 'react';
import ReactDOM from 'react-dom';
import { HelloPlanet } from './Components/HelloPlanet';

var obj = {
  myFavNumber : 0
}

ReactDOM.render(
  <div>
    <HelloPlanet name="Earth" num={5} />
  </div>,
  document.getElementById('firstapp')
);
