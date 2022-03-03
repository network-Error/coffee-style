import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Mugs from './components/Mugs/Mugs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Mugs />
        <Catalog />
        <Image />
      </div>
    </BrowserRouter>
  );
}

export default App;
