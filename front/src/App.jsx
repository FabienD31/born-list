import './App.css';
import {Routes, Route } from "react-router-dom";
import Menu from './components/menu/Menu.jsx';
import Home from './pages/home/Home.jsx';
import TableContributor from "./pages/tableContributor/TableContributor";


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showContributor" element={<TableContributor />} />
      </Routes>
    </div>
  );
}

export default App;
