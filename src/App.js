import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
      <nav className="App">
        <Header />
        <h1>Swag</h1>
        <p>Hey</p>
        <Footer />
      </nav>
  );
}

export default App;
