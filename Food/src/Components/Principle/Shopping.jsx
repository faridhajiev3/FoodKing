import React, { useContext, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FoodContext } from '../../Context/GlobalState'; 
import { Link } from 'react-router-dom';

export default function Shopping({ item }) {
    const { addToCard, card, addToBasket, selectedCategory, getCategoryData } = useContext(FoodContext)
    const data = getCategoryData();

    return (
        <div className='freme'>
            <Link to={`/read/${item.id}`}> <img className='image' src={item.productImage} alt="" /></Link>
            <div className='first'>
                <p className='data'>{item.info}</p>
                <h3 className='productName'>{item.productName}</h3>
                <p className='price'>{item.price} $</p>
            </div>
            <div className='second'>
                <button className='cart' onClick={() => addToBasket(item.id)}>Səbətə at → </button>
                <span className='star'>{item.star} ⭐</span>
                <div className='heart2'>
                    <CiHeart
                        className={`heart ${card.some((favItem) => favItem.id === item.id) ? 'favorited' : ''}`}
                        onClick={() => addToCard(item.id)}
                    />
                </div>
            </div>
        </div>
    )
}
