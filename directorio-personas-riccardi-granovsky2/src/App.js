import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from './pages/main';
import Layout from './pages/layout';
import PersonaScreen from './pages/persona'
import EstadisticasScreen from './pages/estadisticas'
import ContactoScreen from './pages/contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainScreen />} />
          <Route path="persona/:id" element={<PersonaScreen />} />
          <Route path="estadisticas" element={<EstadisticasScreen />} />
          <Route path="contacto" element={<ContactoScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
