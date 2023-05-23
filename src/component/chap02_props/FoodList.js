import React from 'react';
import FoodItem from "./FoodItem";
import SayHello from "../../SayHello";


const FoodList = (props) => {

    // fetch를 통해 음식 목록 json을 불러옴
    const foods = {
        id: 23451,
        foodList: [
            {
                foodName: '짜장면',
                price: 6000,
                foodId: 'chinese'
            },
            {
                foodName: '해물파점',
                price: 12000,
                foodId: 'korean'
            },
            {
                foodName: '카츠동',
                price: 8000,
                foodId: 'japanese'
            },
            {
                foodName: '초밥',
                price: 15000,
                foodId: 'japanese'
            },
            {
                foodName: '김치찌개',
                price: 5000,
                foodId: 'korean'
            },
        ]
    };

    return (

        <ul>
            <SayHello>
                <a href="https://www.naver.com">네이버 링크</a>
            </SayHello>

            {
                foods.foodList.map(
                    ({foodName, foodId, price}) =>
                        <FoodItem foodName={foodName} foodId={foodId} price={price} />
                )
            }
        </ul>
    )
};

export default FoodList;