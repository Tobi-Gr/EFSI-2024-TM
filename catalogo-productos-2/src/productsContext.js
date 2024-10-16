import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
const [productsData, setProductsData] = useState(null);

useEffect(() => {
async function fetchProductsData() {
    try {
    const response = await axios.get('https://dummyjson.com/products');
    setProductsData(response.data);
    } catch (error) {
    console.error('Error fetching products data:', error);
    }
}

fetchProductsData();
}, []);

return (
    <ProductsContext.Provider value={{ productsData }}>
        {children}
    </ProductsContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductsContext);
}