import './App.css';
import Layout from './pages/layout';
import HomeScreen from './pages/home';
import ProductosScreen from './pages/productos';
import ProductoDetalleScreen from './pages/productoDetalle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from './productsContext';

function App() {

  return (
    <ProductsProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomeScreen />} />
                <Route path='productos' element={<ProductosScreen />} />
                <Route path='productos/detalle/:id' element={<ProductoDetalleScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
