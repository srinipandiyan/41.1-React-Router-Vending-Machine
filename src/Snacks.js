import React from 'react'
import { Link } from 'react-router-dom';

function Cookie(){
    return (
        <div>
            <h1>Here's your home-baked chocolate chip cookie!</h1>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEXNdPiKyyhVnic5YVQnRiDY5pAy0uCF_dM30h_s7xA&s" 
                alt="cookie"
                style={{ width: '250px', height: '250px' }}></img><br/>
            <Link to="..">Go back</Link>
        </div>
    );
}

function GranolaBar(){
    return (
        <div>
            <h1>Here's your gluten free granola bar!</h1>
            <img 
                src="https://www.texanerin.com/content/uploads/2020/09/granola-bars-10.jpeg" 
                alt="granola bar"
                style={{ width: '250px', height: '250px' }}></img><br/>
            <Link to="..">Go back</Link>
        </div>
    );
}


function PizzaSlice(){
    return (
        <div>
            <h1>Here's your slice of buffalo chicken pizza!</h1>
            <img 
                src="https://www.ownyoureating.com/wp-content/uploads/2020/05/Buffalo-chicken-pizza-slice-stock-scaled-e1589392722142.jpg" 
                alt="buffalo chicken pizza slice"
                style={{ width: '250px', height: '250px' }}></img><br/>
            <Link to="..">Go back</Link>
        </div>
    );
}


export { Cookie, GranolaBar, PizzaSlice };