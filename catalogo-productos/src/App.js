import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import HomeScreen from './pages/home';
// import PersonaScreen from './pages/persona'
// import EstadisticasScreen from './pages/estadisticas'
// import ContactoScreen from './pages/contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />{/* 
          <Route path="persona/:id" element={<PersonaScreen />} />
          <Route path="estadisticas" element={<EstadisticasScreen />} />
          <Route path="contacto" element={<ContactoScreen />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
