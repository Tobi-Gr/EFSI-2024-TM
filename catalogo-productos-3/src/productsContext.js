import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        async function fetchProductsData() {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
                console.log('response.data.products:', response.data.products);
            } catch (error) {
                console.error('Error fetching products data:', error);
            }
        }

        fetchProductsData();
    }, []);


    const anadirAlCarrito = (product) => {
        setCarrito((prevCarrito) => {
            const indexProductoExistente = prevCarrito.findIndex((item) => item.id === product.id);
            if (indexProductoExistente !== -1) { //ya tiene cargado el producto, así que se le agrega cantidad
                const carritoActualizado = [...prevCarrito];
                carritoActualizado[indexProductoExistente].quantity += 1;
                return carritoActualizado;
            } else {
                return [...prevCarrito, { ...product, quantity: 1 }]; //se le agrega el producto con cantidad 1
            }
        });
    };

    const sacarDeCarrito = (productId) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productId));
    };

    const actualizarCantEnCarrito = (productId, cantidad) => {
        setCarrito((prevCarrito) => {
            const carritoActualizado = prevCarrito.map((item) =>
                item.id === productId ? { ...item, quantity: cantidad } : item
            );
            return carritoActualizado;
        });
    };

    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <ProductsContext.Provider
            value={{
                productsData: products,
                carrito: carrito,
                anadirAlCarrito: anadirAlCarrito,
                sacarDeCarrito: sacarDeCarrito,
                actualizarCantEnCarrito: actualizarCantEnCarrito,
                calcularTotal: calcularTotal
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
};
