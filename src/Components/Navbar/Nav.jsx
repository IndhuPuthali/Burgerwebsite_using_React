
import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <>
            <div className="nav-bar">
                <div className="menu" >
                        <div className='line-top'></div>
                        <div className='line-middle'></div>
                        <div className='line-bottom'></div>
                </div>
                <div className="logo">
                 <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/06/30145604/Burger-King_Logo-1-1536x922.jpg" alt="" />
                </div>
                <div className="btn">
                    <button id="btn">SignUp / SignIn</button>
                    <button>$0.00</button>
                </div>
            </div>
        </>
    );
}

export default Nav;

