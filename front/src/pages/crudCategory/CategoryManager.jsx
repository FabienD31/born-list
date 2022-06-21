import "./CategoryManager.css";
//import data from "./dataFake.js";
import Input from "../../components/input/Input.jsx";
import ButtonIcon from "../../components/button/ButtonIcon.jsx";
import ButtonText from "../../components/button/ButtonText.jsx";
import {useState, useEffect} from "react";
import axios from "axios";


const CategoryManager = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const results = await axios.get('http://localhost:3001/categories/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setCategories(results.data)
      console.log(results.data);
    }
    getCategories();
  }, []);

  return (
    <div>
      <div className="btnCategory">
      <ButtonText value="Créer" callBack={()=>{}} />
      </div>
      <h1>Gestion des categories</h1>
      <div>
      <table id="tableCategory">
          <tr id="headCategory">
            <th>Nom de la catégorie</th>
            <th>Actions</th>
          </tr>
          {
            categories.map((item) => 
          <tr key={item.id} id="bodyCategory">
            <td><Input value={item.name} /></td>
            <td id="btnTable">
              <ButtonIcon iconFontAwesome="fa-solid fa-pen-to-square" onClick={()=>{}}/>
              <ButtonIcon iconFontAwesome="fa-solid fa-trash" onClick={()=>{}}/>
              <ButtonIcon iconFontAwesome="fa-solid fa-check" onClick={()=>{}}/>
            </td>
            
          </tr>
        )}
        </table>
      </div>
    </div>
  );
}
export default CategoryManager;