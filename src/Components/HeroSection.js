import React from 'react';
import { Button } from './Button';
import '../Style/HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>WATCH TRAILER</Button>
            </div>
        </div>
    );
};

export default HeroSection;