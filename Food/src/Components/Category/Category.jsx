
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import { FoodContext } from '../../Context/GlobalState';

const Category = ({ item }) => {

    const { setSelectedCategory } = useContext(FoodContext);
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.category-btn');
            if (window.scrollY > 0) {
                nav.classList.add('sc');
            } else {
                nav.classList.remove('sc');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="category-dropdown">
            <button className="category-btn" style={{ backgroundColor: item }}>Kateqoriyalar</button>
            <div className="dropdown-content">
                <button onClick={() => setSelectedCategory('Supermarket')}>Supermarket</button>
                <button onClick={() => setSelectedCategory('Bakery')}>Bakery</button>
                <button onClick={() => setSelectedCategory('Aptek')}>Aptek</button>
            </div>
        </div>
    );
};

export default Category;
