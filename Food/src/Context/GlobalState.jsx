import { createContext, useEffect, useState } from "react";
import api from "../Api/api";



export const FoodContext = createContext(null)


export default function FoodContextProvider({ children }) {
    const [info, setInfo] = useState([])
    const [meal, setMeal] = useState([])
    const [medicine, setMedicine] = useState([])
    const [card, setCard] = useState([])
    const [cardList, setCardList] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Supermarket');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function axiosFood() {
            try {
                const { data } = await api.get("foods")
                setInfo(data)
            } catch (error) {
                console.log("sehv", error)
            }
        }
        axiosFood()
    }, [])


    useEffect(() => {
        async function axiosMeals() {
            try {
                const { data } = await api.get("meals")
                setMeal(data)
            } catch (error) {
                console.log("sehv", error)
            }
        }
        axiosMeals()
    }, [])

    useEffect(() => {
        async function axiosMedicine() {
            try {
                const { data } = await api.get("medicine")
                setMedicine(data)
            } catch (error) {
                console.log("sehv", error)
            }
        }
        axiosMedicine()
    }, [])

    const addToCard = (id) => {
        setCard((prev) => {
            const isFavorited = prev.some((item) => item.id === id);
            if (isFavorited) {
                return prev.filter((item) => item.id !== id);
            } else {
                return [...prev, info.find((item) => item.id === id)];
            }
        });
    }

    const addToCard2 = (id) => {
        setCard((prev) => {
            const isFavorited = prev.some((item) => item.id === id)
            if (isFavorited) {
                return prev.filter((item) => item.id !== id)
            } else {
                return [...prev, meal.find((item) => item.id === id)]
            }
        })
    }


    const deleteCard = (id) => {
        setCard(card.filter((item) => item.id !== id));
    };
    const deleteCard2 = (id) => {
        setCardList(cardList.filter((item) => item.id !== id));
    };

    const addToBasket = (id) => {
        const checkExist = cardList.find(item => item.id === id)
        if (checkExist) {
            const noExist = cardList.filter((item) => item.id !== id)
            setCardList([...noExist, { ...checkExist, quantity: checkExist.quantity + 1 }])
        } else {
            setCardList((prev) => [...prev, { ...info.find((item) => (item.id == id)), quantity: 1 }])
        }
    }

    const addToBasket2 = (id) => {
        const checkExist = cardList.find(item => item.id === id)
        if (checkExist) {
            const noExist = cardList.filter((item) => item.id !== id)
            setCardList([...noExist, { ...checkExist, quantity: checkExist.quantity + 1 }])
        } else {
            setCardList((prev) => [...prev, { ...meal.find((item) => (item.id == id)), quantity: 1 }])
        }
    }

    const incrementQuantity = (id) => {
        setCardList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCardList((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };



    const getCategoryData = () => {
        switch (selectedCategory) {
            case 'Supermarket':
                return info;
            case 'Bakery':
                return meal;
            case 'Aptek':
                return medicine;
            default:
                return [];
        }
    };

    const data = getCategoryData()

    const setFilterBooks = ({ query, type }) => {
        let filtered = data
        if (query) {
            filtered = filtered.filter((book) => book.productName.toLowerCase().includes(query.toLowerCase()))
            setFilteredBooks(filtered)
            console.log(filteredBooks)
            return
        }
        setFilteredBooks(data)
    }

    const makeOrder = () => {
        setOrders([...orders, ...cardList]);
        setCardList([]);
    }
    const cancelOrder = (index) => {
        setOrders((prevOrders) => prevOrders.filter((i) => i.index !== index));
    }
    
    return (
        <FoodContext.Provider value={{ cancelOrder, orders, makeOrder, selectedCategory, setSelectedCategory, getCategoryData, medicine, filteredBooks, setFilterBooks, addToBasket2, deleteCard2, incrementQuantity, decrementQuantity, cardList, addToBasket, addToCard2, info, meal, addToCard, card, deleteCard }}>
            {children}
        </FoodContext.Provider>
    )
}