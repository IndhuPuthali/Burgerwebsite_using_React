
import React from 'react';
import Nav from './Components/Navbar/Nav';
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Cards/Card';
import Data from './Components/Cards/Data';
import Foot from './Components/Footer/Foot';


function App() {
    return (
        <>
            <Nav />
            <Carousel />
            <div className="container">
            {Data.map((res)=>{
                return(
                <Card  src={res.src} name={res.name} des={res.des} price={res.price}/>
                )
            })}
            </div>
            <Foot/>
         
        </>
    );
}

export default App;
