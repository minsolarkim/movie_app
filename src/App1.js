import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5.0
  },
  {
    id:2,
    name:"samgiopsal",
    image:"http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
    rating: 4.3
  },
  {
    id:3,
    name:"duyu",
    image:"https://lh3.googleusercontent.com/proxy/XXrUkXNP520JbwvkojMSkNF45VYPhpVwwB_GNEFIoHPgCs7o4V4QlbL2vLv7U6I5KGPPWHb5xHSy3SakWqZ8G43opc9sDq9wqyMbeknQBMWbyAXa30lj6sXL_5lIU2etcgH--L_W-OjPNAK3JJpOeCyJyRt1uUlOlH1kdVAYl6xkAhfWnMOoNCX27U48PhA7OJ7oUsAKDMf92EvaRxsYcamYI6_xSoANmQ" ,
    rating: 3.0
  }
];

// function renderFood(dish) {
//   // console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />
// }

function Food( {name, picture, rating} ) {
  return <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}></img>
    </div>;
}
//Food() 아래에
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App1() {
  return (
  <div>
     {foodILike.map(dish => //dish는 object다 !!
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    )} 
    {/* {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)} */}

  </div>
  )
};

export default App1;
