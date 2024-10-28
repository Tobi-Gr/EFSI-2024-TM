// // import Datos from './../Datos';
// import React, { useEffect, useState } from 'react';
// import CardProducto from '../components/CardProducto';
// import Search from '../components/Search';
// import { useProducts } from './../productsContext';

// function ProductosScreen() {
//   const { productsData = [] } = useProducts() || {};
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   const [q, setQ] = useState("");
//   const [filterParam, setFilterParam] = useState("All");
//   const [productosFiltrados, setProductosFiltrados] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then(
//             (result) => {
//                 setIsLoaded(true);
//                 setItems(result.products);
//             },
//             (error) => {
//                 setIsLoaded(true);
//                 setError(error);
//             }
//         );
// }, []);

//   useEffect(() => {
//     setProductosFiltrados(productsData);
//   }, [productsData]);

//   const handleSearch = (search) => {
//     if (search) {
//       const results = productsData.filter((producto) => 
//         producto.title.toLowerCase().includes(search.toLowerCase())
//       );
//       setProductosFiltrados(results);
//     } else {
//       setProductosFiltrados(productsData); // Restablece a todos los productos si no hay búsqueda
//     }
//   };

//   return (
//     <main className="main">
//       <h1 className='titulo'>Productos</h1>
//       <div className='busqueda'>
//         <Search onSearch={handleSearch} />
//       </div>
//       <div>
//       <select
//         onChange={(e) => {
//             setFilterParam(e.target.value);
//         }}
//         className="custom-select"
//         aria-label="Filtrar por categoría"
//       >
//         <option value="All"></option>
//         <option value="beauty">Beauty</option>
//         <option value="fragrances">Fragrances</option>
//         <option value="furniture">Furniture</option>
//         <option value="groceries">Groceries</option>
//        </select>
//       </div>
//       <div className='productosContainer'>
//         {productosFiltrados ? (
//           productosFiltrados.map((producto, index) => (
//             <CardProducto key={index} producto={producto} />        
//           ))
//         ) : (
//           <p>No hay resultados para tu búsqueda</p>
//         )}
//       </div>
//     </main>
//   );
// }

// export default ProductosScreen;
// src/pages/ProductosScreen.js
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