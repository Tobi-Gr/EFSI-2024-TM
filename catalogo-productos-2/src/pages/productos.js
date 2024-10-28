import React, { useState, useEffect } from "react";
import CardProducto from '../components/CardProducto'; // Asegúrate de la ruta

const ProductosScreen = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [filterParam, setFilterParam] = useState("All");

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.products);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const filteredData = filterParam === "All"
        ? items
        : items.filter(item => item.category === filterParam);

    if (error) {
        return (
            <p>
                {error.message}, if you get this error, the API might have stopped
                working.
            </p>
        );
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">
                <div className="select">
                    <select
                        onChange={(e) => setFilterParam(e.target.value)}
                        className="custom-select"
                        aria-label="Filter Products By Category"
                    >
                        <option value="All">Filter By Category</option>
                        <option value="beauty">Beauty</option>
                        <option value="fragrances">Fragrances</option>
                        <option value="furniture">Furniture</option>
                        <option value="groceries">Groceries</option>
                    </select>
                    <span className="focus"></span>
                </div>
                <ul className="card-grid">
                    {filteredData.map((item) => (
                        <li key={item.id}>
                            <CardProducto producto={item} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default ProductosScreen;
