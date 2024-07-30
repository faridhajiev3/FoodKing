import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import "./orders.css"
import Footer from '../Footer/Footer'
import { IoChevronDownOutline } from "react-icons/io5";
import { FoodContext } from '../../Context/GlobalState';


export default function Orders() {
    const { medicine, orders, cancelOrder } = useContext(FoodContext)
    console.log(medicine)
    const [open, setOpen] = useState(false)
    const handleChange = () => {
        setOpen(!open)
    }
    return (
        <div>
            <Header item={"#fff"} />
            <div className='website'>
                <div className='orderBorder'>
                    <p>SIFARIŞ №</p>
                    <p>MƏBLƏĞ</p>
                    <p>XIDMƏT HAQQI</p>
                    <p>SAYI</p>
                    <p>YARADILMA TARIXI</p>
                    <p>STATUS</p>
                </div>
                <div className='seconddborder'>
                    <div className='skyBlue'>
                        <p>40</p>
                        <p>1 ₼</p>
                        <p>0 ₼</p>
                        <p>1</p>
                        <p>30-07-2024</p>
                        <p>Ləğv edildi</p>
                        <IoChevronDownOutline onClick={handleChange} />
                    </div>
                    <div className={`open ${open ? "active" : ""}`}>
                        <div className='priceMoney'>
                            <div className='one'>
                                <p>Məhsulun adı</p>
                                <p>Sayı</p>
                                <p>Qiyməti</p>
                                <p>Məbləğ</p>
                            </div>
                            <p className='inline'></p>
                            {orders.map((order, index) => (
                                <div key={index} className='two'>
                                    <p>{order.productName}</p>
                                    <p>{order.quantity}</p>
                                    <p>{order.price}</p>
                                    <p>{order.price * order.quantity} ₼</p>
                                </div>
                            ))}
                        </div>
                        <div className='three'>
                            <p>Ümumi məbləğ: 1.00 ₼</p>
                            <div>
                                <button className='built'>Dəzəlt</button>
                                <button onClick={() => cancelOrder()} className='error'>Ləğv et</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
