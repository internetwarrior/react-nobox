import React from 'react';
import './oneCart.css'
// import img1 from './images/Mask group (11).png'

const OneCart = ({el}) => {
    return (
        <>
            <div className="slide">
                <img className='img-cart' src={el.image} alt="" />
                <div className="cart-description">
                    <div className="cart-description__text">
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Привет, это просто лайфхак и инструция для тебя. <br />
                            ● Жми на пост, чтобы посмотреть контакты <br />
                            ● Telgram: @nobox_kg <br />
                            К...
                        </p>
                    </div>
                    <div className="time-publication">
                        <img src="https://nobox.kg/static/profile_icon.jpg" alt="" />
                        <div className="time-publication__text">
                            <h2>С уважением, Рекламадатель</h2>
                            <p>Опубликовано: 3 дня, 22 часа назад</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneCart;