import React, { useEffect, useState } from 'react'
import "./read.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa";

import { IoSend } from "react-icons/io5";
import api from '../../Api/api'
import { CiStar } from "react-icons/ci";
import Header from '../Header/Header';

export default function Read() {
    const [read, setRead] = useState({})
    const { id } = useParams()
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function axiosProducts() {
            try {
                const response = await api.get("foods/" + id)
                setRead(response.data)
            } catch (error) {
                console.log("sevh var", error)
            }
        }

        axiosProducts()
    }, [])

    useEffect(() => {
        async function axiosProducts() {
            try {
                const response = await api.get("meals/" + id)
                setRead(response.data)
            } catch (error) {
                console.log("sevh var", error)
            }
        }

        axiosProducts()
    }, [])
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        setComments([...comments, comment]);
        setComment('');
    };

    // console.log(comment)
    console.log(comments)
    return (
        <div>
            <Header />
            <div className='mainPagee'>
                <div className='word'>
                    <h2 className='titles'>Şehli <span className='title'>Şehli</span> <br /> Alış-veriş </h2>
                    <button className='start'>Alış-verişə başla → </button>
                </div>
                <img className='letter1' src="https://foodking.program.az/assets/images/banner/banner-shap-2.png" alt="" />
                <img className='letter2' src="https://foodking.program.az/assets/images/banner/banner-shap-2.png" alt="" />
                <img className='letter3' src="https://foodking.program.az/assets/images/banner/banner-shap-4.png" alt="" />
                <img className='letter4' src="https://foodking.program.az/assets/images/banner/banner-shap-5.png" alt="" />
                <div className='circular'>
                    <img className='twoMan' src="	https://foodking.program.az/assets/images/banner/man.png" alt="" />
                </div>
            </div>
            <div className='border-main'>
                <div className='border-green'>
                    <p>Məhsul məlumatları</p>
                </div>
                <div className='content-product'>
                    <div>
                        <img className='readImg' src={read.productImage} alt="" />
                    </div>
                    <div> 
                        <p className='readName'>{read.productName}</p>
                        <p className='readStar'>{read.star}</p>
                        <p className='readPrice'><span className='black'>Qiymət</span> {read.price} $</p>
                        <p className='readInfo'>Məhsul haqqında</p>
                        <p className='readSpoiler'>Məhsul haqqında məlumat yoxdur</p>
                        <button className='doubleBasket'>Səbətə at →</button>
                        <Link to="/">
                            <button className='backofblack' >Geri Qayit →</button>
                        </Link>
                    </div>
                </div>
                <div className='second-section'>
                    <p className='rate'>Qiymətləndir</p>
                    <div className='starss'>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                    <div className='sends'>
                        <input
                            className='comments'
                            type="text"
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <IoSend className='get' onClick={handleCommentSubmit} />
                    </div>
                    <div className='commentsList'>
                        {comments.map((cmt, index) => (
                            <p key={index} className='comment'>{cmt}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
