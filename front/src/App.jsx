import './App.css';
import {Routes, Route } from "react-router-dom";
import Menu from './components/menu/Menu.jsx';
import Home from './pages/home/Home.jsx';
import CrudProduct from './pages/crudProduct/CrudProduct.jsx';
import TableContributor from "./pages/tableContributor/TableContributor";
import CategoryManager from './pages/crudCategory/CategoryManager.jsx';


function App() {
  
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showContributor" element={<TableContributor />} />
        <Route path="/addProduct" element={<CrudProduct />} />
        <Route path="/categoryManager" element={<CategoryManager />} />
      </Routes>
    </div>
  );
}

export default App;
