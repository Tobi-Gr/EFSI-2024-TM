import './App.css';
import Layout from './pages/layout';
import HomeScreen from './pages/home';
import ProductosScreen from './pages/productos';
import ProductoDetalleScreen from './pages/productoDetalle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from './productsContext';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <ProductsProvider.Provider>
              <Route index element={<HomeScreen />} />
              <Route path='productos' element={<ProductosScreen />} />
              <Route path='productos/detalle/:id' element={<ProductoDetalleScreen />} />
            </ProductsProvider.Provider>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
