import './App.css';
import MainScreen from './pages/main';
import PersonaScreen from './pages/persona'
import EstadisticasScreen from './pages/estadisticas'
import ContactoScreen from './pages/contacto'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Persona" component={PersonaScreen} />
        <Stack.Screen name="Estadisticas" component={EstadisticasScreen} />
        <Stack.Screen name="Contacto" component={ContactoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
