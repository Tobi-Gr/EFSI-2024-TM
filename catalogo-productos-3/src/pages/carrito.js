//Inspo: https://www.nike.com.ar/checkout/#/cart

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../productsContext';
import PastillaCantidad from '../components/PastillaCantidad';

function CarritoScreen() {
    const { carrito, calcularTotal, sacarDeCarrito } = useProducts();


    return (
        <main className="main">
            <table className='tabla-carrito'>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                {
                    carrito.map((producto)=>(
                    <tr>
                        <td>
                            <img className="thumbnail-carrito" alt='imagen del producto' src={producto.thumbnail}/>
                            <b>{producto.title}</b>
                        </td>
                        <td>${producto.price}</td>
                        <td><PastillaCantidad producto={producto}/></td>
                        <td>${producto.price * producto.quantity}</td>
                        <td onClick={()=> sacarDeCarrito(producto.id)} className='delete-product-btn'>X</td>
                    </tr>
                    ))
                }
            </table>
            <h3>Total: ${calcularTotal()}</h3>
        </main>
    );
}

export default CarritoScreen;
