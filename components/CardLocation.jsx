import React from "react";

const CardLocation = ({ id, name, type, dimension }) => {
  return (
    <div key={id} class="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold">{name}</h1>
      <p class="text-gray-500 font-medium">{type}</p>
      <p class="text-gray-500 font-medium">{dimension}</p>
    </div>
  );
};

export default CardLocation;
