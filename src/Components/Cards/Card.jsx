import './Card.css'
const Card=(Burger)=>{
    return(
       <>
        <div className="card">
            <img src={Burger.src} alt="" />
            <h1>{Burger.name}</h1>
        <div className="card-body">
            <p>{Burger.des}</p>
            <strong>{Burger.price}</strong>
            <br />
            <button id="order">OrderNow</button>
          
        </div>
        </div>
       </>
    )
   }
   export default Card