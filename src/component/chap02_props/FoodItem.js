import React from 'react';

const FoodItem = ({foodName, foodId, price}) => (
    <li id={foodId}>{foodName} ({price}원)</li>
);

export default FoodItem;
