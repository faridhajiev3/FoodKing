import React, { useContext, useEffect, useRef, useState } from 'react'
import "./principle.css"
import Shopping from './Shopping';
import api from '../../Api/api';
import Header from '../Header/Header';
import { FoodContext } from '../../Context/GlobalState';
import useForm from '../Hooks/useForm';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";


const ITEMS_PER_PAGE = 3;
export default function Principle() {
    const { getCategoryData, info, filteredBooks, setFilterBooks, meal, medicine, selectedCategory, setSelectedCategory } = useContext(FoodContext)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const sectionRef = useRef(null)

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const [activePage, setActivePage] = useState(1);

    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const { formValue, handleChange } = useForm({
        query: "",
    })

    useEffect(() => {
        setFilterBooks(formValue);
    }, [formValue, setFilterBooks]);

    const handleSubCategoryToggle = (category) => {
        setSelectedCategory(category)
        if (selectedSubCategory === category) {
            setSelectedSubCategory(null);
        } else {
            setSelectedSubCategory(category);
        }
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='mainPage'>
                <div className='word'>
                    <h2 className='titles'>Şehli <span className='title'>Şehli</span> <br /> Alış-veriş </h2>
                    <button onClick={scrollToSection} className='start'>Alış-verişə başla → </button>
                </div>
                <img className='letter1' src="https://foodking.program.az/assets/images/banner/banner-shap-2.png" alt="" />
                <img className='letter2' src="https://foodking.program.az/assets/images/banner/banner-shap-2.png" alt="" />
                <img className='letter3' src="https://foodking.program.az/assets/images/banner/banner-shap-4.png" alt="" />
                <img className='letter4' src="https://foodking.program.az/assets/images/banner/banner-shap-5.png" alt="" />
                <div className='circular'>
                    <img className='twoMan' src="	https://foodking.program.az/assets/images/banner/man.png" alt="" />
                </div>
            </div>
            <div className='page2' ref={sectionRef}>
                <div className='page'>
                    <div>
                        <form>
                            <div className='bordersearch'>
                                <input
                                    onChange={handleChange}
                                    name='query'
                                    className='search'
                                    type="search"
                                    value={formValue.query}
                                />
                            </div>
                        </form>
                        <div className='port'>
                            <h2>Məhsul kateqoriyaları</h2>
                            <div className='type2'>
                                <button onClick={() => handleSubCategoryToggle('Supermarket')}>Supermarket</button>
                                {selectedSubCategory === 'Supermarket' && (
                                    <div className='subcategory'>
                                        <p>Alt Kategori 1</p>
                                        <p>Alt Kategori 2</p>
                                    </div>
                                )}
                                <button onClick={() => handleSubCategoryToggle('Aptek')}>Aptek</button>
                                {selectedSubCategory === 'Aptek' && (
                                    <div className='subcategory'>
                                        <p>Alt Kategori 1</p>
                                        <p>Alt Kategori 2</p>
                                    </div>
                                )}
                                <button onClick={() => handleSubCategoryToggle('Bakery')}>Bakery</button>
                                {selectedSubCategory === 'Bakery' && (
                                    <div className='subcategory'>
                                        <p>Alt Kategori 1</p>
                                        <p>Alt Kategori 2</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select className='choose' name="salam" id="">
                                <option value="">Populyarlığa görə sırala</option>
                                <option value="">Ən yeni məhsulları sırala</option>
                                <option value="">Reytinqə görə sırala</option>
                                <option value="">Qiymətə görə: aşağıdan yuxarıya</option>
                                <option value="">Qiymətə görə: yuxarıdan aşağıya </option>
                            </select>
                        </div>
                        <div className='try'>
                            {currentItems.map((item) => (
                                <Shopping item={item} key={item.id} />
                            ))}
                        </div>
                        <div className='pagination'>
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <button
                                    key={pageNumber + 1}
                                    onClick={() => handlePageClick(pageNumber + 1)}
                                    className={`page-button ${activePage === pageNumber + 1 ? 'activ' : ''}`}
                                >
                                    {pageNumber + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
} 
