// Components/Header/Header.js
import React, { useContext, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css"
import { FoodContext } from '../../Context/GlobalState';
import Category from '../Category/Category'; 

export default function Header({ back, item }) {
    const { cardList } = useContext(FoodContext)
    const totalBasket = cardList.reduce((acc, cur) => acc + cur.quantity, 0)
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 0) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className='nav' style={{ backgroundColor: back }}>
                <div>
                    <Link className='food' to="/">
                        <img className='iconmain' src="https://foodking.program.az/assets/images/logo.png" alt="" />
                        <h4 className='foodKing'>Food King</h4>
                    </Link>
                </div>
                <div className='navbar'>
                    <div>
                        <NavLink className="item" to="/">
                            Ana Səhİfə
                        </NavLink>
                    </div>
                    <Category item={item}/>
                    <div>
                        <NavLink className="item" to="/meal">
                            Bu günün yeməkləri
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="item" to="/favorite">
                            Sevimlilər
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="item" to="/orders">
                            Sifarişlər
                        </NavLink>
                    </div>
                    <div className='border-icon'>
                        <NavLink className="icon-medium" to="/account">
                            <CiUser />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="icon-hard" to="/cart">
                            <TiShoppingCart /><span className='totalBasket'>{totalBasket}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}
