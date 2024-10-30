import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
const [products, setProducts] = useState(null);

useEffect(() => {
async function fetchProductsData() {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        console.log("response.data.products: \n", response.data.products)
    } catch (error) {
        console.error('Error fetching products data:', error);
    }
}

fetchProductsData();
}, []);

return (
    <ProductsContext.Provider value={{ productsData: products }}>
        {children}
    </ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
};