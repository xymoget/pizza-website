import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Pizza() {
    const { id } = useParams();
    return (<h1>Pizza {id}</h1>)
}

export default Pizza;