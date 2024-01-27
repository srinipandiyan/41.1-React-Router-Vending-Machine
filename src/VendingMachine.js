import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Cookie, GranolaBar, PizzaSlice } from './Snacks';

function VendingMachine() {

    return (
        <div>
            <h1>This is a vending machine.</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/cookie">Cookie</Link></li>
                        <li><Link to="/gf-granola-bar">Gluten-Free Granola Bar</Link></li>
                        <li><Link to="/pizza-slice">Pizza Slice</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/cookie" element={<Cookie />} />
                    <Route path="/gf-granola-bar" element={<GranolaBar />} />
                    <Route path="/pizza-slice" element={<PizzaSlice />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;
