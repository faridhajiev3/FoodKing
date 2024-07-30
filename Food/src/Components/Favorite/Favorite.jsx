import React, { useContext } from 'react'
import Header from '../Header/Header'
import "./favorite.css"
import { FoodContext } from '../../Context/GlobalState'
import { MdDelete } from "react-icons/md";
import Footer from '../Footer/Footer';

export default function Favorite() {
    const { card, deleteCard } = useContext(FoodContext)
    return (
        <div>
            <Header item={"#eef2f3"}/>
            <div className='core'>
                <img className='imgFood' src="https://foodking.program.az/assets/images/banner/pages-banner.png" alt="" />
            </div>
            <div className='backcolor'>
                <div className='borderFood'>
                    <div className='product'>
                        <p>Məhsul</p>
                        <p>Qiymət</p>
                    </div>
                    <div>
                        {
                            card.map((item) => (
                                <div key={item.id} className='likes'>
                                    <img className='imgProduct' src={item.productImage} alt="" />
                                    <p className='nameProduct'>{item.productName}</p>
                                    <p className='money'>{item.price}</p>
                                    <p className='basket'>Səbətə əlavə et</p>
                                    <p className='bin' onClick={()=>deleteCard(item.id)}><MdDelete/></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

