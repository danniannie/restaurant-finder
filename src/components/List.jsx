import React from "react";
import "../List.css";

const List = ({ restaurants, displayButtons, name }) => {
  if (displayButtons) return <form />;
  return (
    <div>
      <h2>You are looking for restaurants in {name}</h2>
      <ul>
        {restaurants.map(({ restaurant }) => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
