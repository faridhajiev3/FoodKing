import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import "./meal.css"
import { useState } from 'react'
import api from '../../Api/api'
import { CiHeart } from "react-icons/ci";
import { FoodContext } from '../../Context/GlobalState'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Meal() {

    const { meal, addToCard2, card, addToBasket2 } = useContext(FoodContext)
    return (
        <div className='borderColor'>
            <Header back={"#fff"} item={"#fff"}/>
            <div className='borderMeal'>
                <div className='todayMeal'>
                    {
                        meal.map((item) => (
                            <div className='freme' key={item.id}>
                                <Link to={`/read/${item.id}`}><img className='image' src={item.productImage} alt="" /></Link>
                                <div className='first'>
                                    <p className='data'>{item.info}</p>
                                    <h3 className='productName'>{item.productName}</h3>
                                    <p className='price'>{item.price} $</p>
                                </div>
                                <div className='second'>
                                    <button onClick={()=>addToBasket2(item.id)} className='cart'>Səbətə at → </button>
                                    <span className='star'>{item.star} ⭐</span>
                                    <CiHeart
                                        className={`heart ${card.some((favItem) => favItem.id === item.id) ? 'favorited' : ''}`}
                                        onClick={() => addToCard2(item.id)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
