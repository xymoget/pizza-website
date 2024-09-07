import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function Pizza() {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPizza();
    }, [])

    const getPizza = async () => {
        api.get(`/api/pizzas/${id}/`)
        .then((res) => res.data)
        .then((data) => setPizza(data))
        .then(() => setIsLoading(false));
    }

    if (isLoading) {
        return (<h1>Loading...</h1>);
    }
    if (!pizza) {
        return (<h1>404 Not Found</h1>)
    } else {
        return (<div>
            <img src={pizza.picture} />
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <h2>{pizza.price}$</h2>
        </div>)
    }
}

export default Pizza;