import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import HomeScreen from './pages/home';
import ProductosScreen from './pages/productos';
import ProductoDetalleScreen from './pages/productoDetalle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='productos' element={<ProductosScreen />} />
          <Route path='productos/detalle/:id' element={<ProductoDetalleScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
