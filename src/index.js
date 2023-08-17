import React from 'react';
import ReactDOM from'react-dom/client';
import "./index.css"
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){

    return <div>
        <Header />
        <Menu />
        <Footer/>

    </div>

}


function Header(){


    return <header className="header">
        <h1>Pizzaria</h1>
    </header>
}

function Menu(){
    const pizzas=pizzaData;
    // const pizzas=[];
    const numPizzas= pizzas.length;

    return <main className='menu'>
        <h2>Menu</h2>
        {numPizzas > 0 ? (<ul className="pizzas">
            {pizzaData.map(pizza=><Pizza name={pizza.name} 
            ingredient={pizza.ingredients} 
            photoName={pizza.photoName} 
            price={pizza.price}
            soldOut={pizza.soldOut}
            key={pizza.name} />)}
        </ul>):null}

        

        {/* <Pizza name='Pizza Prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese'
        photoName='pizzas/prosciutto.jpg' price={20}/>
        <Pizza name='Pizza Salamino' ingredient='Tomato, mozarella, and pepperoni'
        photoName='pizzas/salamino.jpg' price={10}/> */}

    </main>
}

function Pizza(props){
    return (
        <li className={`pizza ${props.soldOut? "sold-out":""}`}> 
        <img src={props.photoName} alt={props.name}></img>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredient}</p>
            <span>{props.soldOut ? "Sold Out": props.price} </span>
        </div>
        </li>
    );
    
    }
    

function Footer(){
    const hour=new Date().getHours();
    const openHour=9;
    const closeHour=23;
    const isOpen=hour>=openHour && hour<closeHour;



    return <footer className="footer">
        {isOpen ? <Order closeHour={closeHour}/>: <p>We are open between {openHour}:00 and {closeHour}:00</p>}
        </footer>
}

function Order(props){
    return <div className="order">
            <p> We are open until {props.closeHour}:00. Come visit us or order online</p>
            <button className="btn">Order</button>
            </div>
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);