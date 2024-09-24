import React, { useEffect, useState } from 'react';
import './main.css'
import OneCart from '../oneCart/OneCart';


const Main = () => {
    
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setItems(data.users))
    },[])
    return (
        <>
            <section className='hero'>
                <div className="realTime-filter">
                    <div className="btn-box">
                        <button className="filter-options"><span>+</span>Подселением</button>
                        <button className="filter-options"><span>+</span>Парни</button>
                        <button className="filter-options"><span>+</span>Девушки</button>
                        <button className="filter-options"><span>+</span>Семья</button>
                        <button className="filter-options"><span>+</span>Риэлтор</button>
                        <button className="filter-options"><span>+</span>Собственник</button>
                    </div>
                    <div className="btn-right">
                        <button className="btn-reset">Сбросить</button>
                        <button className="btn-find">Найти</button>
                    </div>
                </div>
            </section>
            <section className='carts'>
                <div className="container">
                    <div className="cart__box">
                        {items.splice(0,6).map((el)=>(
                            <OneCart el={el} key={el.id}/>
                        ))}
                    </div>
                    <button className="btn-prev">Следующие &raquo; </button>
                </div>
            </section>
        
        </>
    );
};

export default Main;