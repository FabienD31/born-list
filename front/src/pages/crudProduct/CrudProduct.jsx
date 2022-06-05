import "./CrudProduct.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import ButtonText from "../../components/button/ButtonText.jsx";
import axios from "axios";


const CrudProduct = () => {
const [newProduct, setNewProduct] = useState([]);
const [selected,setSelected]=useState("");
const [categories,setCategories]=useState([]);

  useEffect(() => {
    async function getCategories() {
      const results = await axios.get('http://localhost:3001/categories/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setCategories(results.data)
    }
    getCategories();
  }, []);

const categorySelected =(e)=>{
  let selected = e.target.value;
  setSelected(selected);
  console.log(selected);
};

const handleChange = (e, ) => {
  setNewProduct({
    ...newProduct,
    [e.target.name]: e.target.value, reserved:0, List_idList:1
  });
}
const handleSubmit = (e) => {
  e.preventDefault();
  setNewProduct({...newProduct, Category_idCategory : selected});
  console.log(newProduct);
}

  
  return (
    <div>
      <div className="btnCategory">
        <Link to="/categoryManager"><ButtonText value="Gestion des categories" callBack={()=>{}} /></Link>
      </div>
      <h1>Créer un produit</h1>
      <div className="cardPositionnement">
        <div className="cardCreate">
          <div className="twoInputLign">
          <input className="inputStyle"  placeholder="Nom du produit" name="name" value={newProduct.name} onChange={handleChange}></input>
          <select className="inputStyle" placeholder="Categorie" name="category" value={selected.name} onChange={categorySelected}>
          {categories.map((cat)=>{
            return (
              <option key={cat.idCategory}>{cat.name}</option>
            )
          })}
          
          </select>
          </div>
          <input className="inputStyle" placeholder="Lien d'image format https://" name="image" value={newProduct.image} onChange={handleChange}></input>
          {newProduct.image ? <img className="imgUploaded" alt="imgUploaded" value={newProduct.image} src={newProduct.image}></img> : <img className="imgUploaded" alt="imgUpload" src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/6/5/2/652a7adb1b_98148_01-intro-773.jpg"></img>}
          <input className="inputStyle" placeholder="Lien vers le site" name="link" value={newProduct.link} onChange={handleChange}></input>
          <input className="inputStyle" placeholder="Prix du produit" name="price" value={newProduct.price} onChange={handleChange}></input>
          <div className="btnPositionnement">
          <ButtonText value="Valider" callBack={handleSubmit} />
          <ButtonText value="Supprimer" callBack={()=>{}} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CrudProduct;