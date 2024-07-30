import React from 'react'
import "./footer.css"
import { Link, NavLink } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi2";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='last'>
                <div>
                    <Link className='foood' to="/">
                        <img className='iconmain' src="https://foodking.program.az/assets/images/logo.png" alt="" />
                        <h4 className='foodKing'>Food King</h4>
                    </Link>
                    <p className='register'>Qeydiyyatdan keçin və ilk sifarişiniz komissiyasız çatdırılsın!</p>
                    <div className='icons'>
                        <a className='sosial-media' href=""><FaFacebook /></a>
                        <a className='sosial-media' href=""><FaTwitter /></a>
                        <a className='sosial-media' href=""><FaInstagram /></a>
                        <a className='sosial-media' href=""><FaLinkedin /></a>
                    </div>
                </div>
                <div>
                    <h2 className='next'>Keçidlər</h2>
                    <div>
                        <div className="item-cart">
                            <NavLink className="item-card" to="/">
                                <p className='chevron'><HiChevronRight /> <span>Ana Səhifə</span></p>
                            </NavLink>
                        </div>
                        <div className="item-cart">
                            <NavLink className="item-card" to="/meal">
                                <p className='chevron'><HiChevronRight /> <span> Bu  günün yeməkləri</span></p>
                            </NavLink>
                        </div>
                        <div className="item-cart">
                            <NavLink className="item-card" to="/favorite">
                                <p className='chevron'><HiChevronRight /> <span>Sevimlilər</span></p>
                            </NavLink>
                        </div>
                        <div className="item-cart">
                            <NavLink className="item-card" to="/cart">
                                <p className='chevron'><HiChevronRight /> <span>Səbət</span></p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='inputs'>
                    <label htmlFor="">*Email</label>
                    <div>
                        <input className='offer' type="text" />
                    </div>
                    <label htmlFor="">*Mövzu</label>
                    <div>
                        <input className='offer' type="text" />
                    </div>
                    <label htmlFor="">*Mövzu</label>
                    <div>
                        <textarea className='offer' type="text" />
                    </div>
                    <button className='btn'>Göndər</button>
                </div>
                <div> 
                    <h2 className='contact'>Əlaqə</h2>
                    <div className='last-time'>
                        <p className='vites' ><span className='yellow'><FaHome /></span> <span className='litte'>Grand Park Hasan Bey Zardabi 313, Baku city, Azerbaijan Republic</span></p>
                        <a className='vite' href=''><span className='yellow'><SlEnvolopeLetter /></span> foodkingaze@gmail.com</a>
                        <a className='vite' href=""><span className='yellow'><BsFillTelephoneFill /></span> (+994) 51 250 07 02</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
