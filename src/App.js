import { BrowserRouter } from 'react-router-dom';
import './App.css'
import RBNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <RBNavbar />
    </BrowserRouter>
  );
}

export default App;
