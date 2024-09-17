import React from 'react';
import './main.css'

const Main = () => {
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
                </div>
            </section>
        
        </>
    );
};

export default Main;