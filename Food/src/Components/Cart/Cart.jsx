import React, { useContext } from 'react'
import "./cart.css"
import { FoodContext } from '../../Context/GlobalState'
import Header from '../Header/Header'
import { MdDelete } from "react-icons/md";
import Footer from '../Footer/Footer';

export default function Cart() {
    const { cardList, incrementQuantity, decrementQuantity, deleteCard2, makeOrder } = useContext(FoodContext);

    const calculateTotalPrice = () => {
        return cardList.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div>
            <Header item={"#eef2f3"} />
            <div className="core">
                <img className='imgFood' src="https://foodking.program.az/assets/images/banner/pages-banner.png" alt="" />
            </div>
            <div className="backcolor">
                <div className='borderWhite'>
                    <div className='cartBorder'>
                        <p>Məhsul</p>
                        <p>Qiymət</p>
                        <p>Miqdar</p>
                        <p>Məbləğ</p>
                        <p></p>
                    </div>
                    <div className='cartBorder2'>
                        {
                            cardList.map((item) => (
                                <div key={item.id} className='cart-item'>
                                    <div>
                                        <img className='cardbasket' src={item.productImage} alt="" />
                                        <p>{item.productName}</p>
                                    </div>
                                    <p className='cartPrice'>{item.price}</p>
                                    <div className='quantity-control'>
                                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                                    </div>
                                    <p>{item.price * item.quantity}</p>
                                    <p className='bin' onClick={() => deleteCard2(item.id)}><MdDelete /></p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='totalPrice'>
                        <h2>Toplam Məbləğ: {calculateTotalPrice()} AZN</h2>
                        <button className='makeanorder' onClick={makeOrder}>Sifariş et</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

