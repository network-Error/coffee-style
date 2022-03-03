import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Mugs from './components/Mugs/Mugs';
import Stories from './components/Stories/Stories';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Mugs />
        <Catalog />
        <Image />
        <Stories />
        <Subscribe />
      </div>
    </BrowserRouter>
  );
}

export default App;
