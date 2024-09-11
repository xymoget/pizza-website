import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import PizzaCard from "../components/PizzaCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Pizzas() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        getPizzas();
    }, [])

    const getPizzas = () => {
        api.get('/api/pizzas/')
            .then((res) => res.data)
            .then((data) => setPizzas(data));
    }

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <h1>Pizzas</h1>
                {pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id}></PizzaCard>)}
            </div>
            <Footer />
        </div>);
}

export default Pizzas;  