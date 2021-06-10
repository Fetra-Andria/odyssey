import React from 'react';
import '../Style/Card.css';
import CardItems from './CardItems';

const Card = () => {
    return (
        <div className='cards'>
            <h1>Lorem ipsum dolor sit.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/img-9.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita!'
                            label='Lorem'
                            path='/services'
                        />
                        <CardItems
                            src='images/img-2.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita!'
                            label='Lorem'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/img-3.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita!'
                            label='Lorem'
                            path='/services'
                        />
                        <CardItems
                            src='images/img-4.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita!'
                            label='Lorem'
                            path='/services'
                        />
                        <CardItems
                            src='images/img-8.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita!'
                            label='Lorem'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;