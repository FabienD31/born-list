import "./CrudProduct.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import ButtonText from "../../components/button/ButtonText.jsx";
import axios from "axios";


const CrudProduct = () => {
const [newProduct, setNewProduct] = useState([]);
const [selected,setSelected]=useState(1);
const [categories,setCategories]=useState([]);

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

const categorySelected =(e)=>{
  let selected = parseInt(e.target.value);
  setSelected(selected);
  setNewProduct({...newProduct, Category_idCategory : selected});
};

const handleChange = (e) => {
  setNewProduct({
    ...newProduct,
    [e.target.name]: e.target.value,
    quantity:parseInt(e.target.value), 
    price:parseFloat(e.target.value),
    reserved:0, 
    List_idList:1, 
    Category_idCategory : selected
  });
}
const handleSubmit = async (e) => {
  e.preventDefault();
  setNewProduct({...newProduct});
  console.log(newProduct)
  await axios.post("http://localhost:3001/products", newProduct);
}

  return (
    <div>
      <div className="btnCategory">
        <Link to="/categoryManager"><ButtonText value="Gestion des categories" callBack={()=>{}} /></Link>
      </div>
      <h1>Créer un produit</h1>
      <form onSubmit={handleSubmit} id="formAddProduct" className="cardPositionnement">
        <div className="cardCreate">
          <div className="twoInputLign">
          <input required type="text" className="inputStyle"  placeholder="Nom du produit" name="name" value={newProduct.value} onChange={handleChange}></input>
          <select className="inputStyle" placeholder="Categorie"  name="category" value={categories.value} onChange={categorySelected}>
          {categories.map((cat)=>{
            return (
              <option key={cat.idCategory} value={cat.idCategory}>{cat.name}</option>
            )
          })}
          </select>
          </div>
          <input required type="url" pattern="https?://.+" className="inputStyle" placeholder="Lien d'image format https://" name="image" value={newProduct.value} onChange={handleChange}></input>
          {newProduct.image ? <img className="imgUploaded" alt="imgUploaded" value={newProduct.image} src={newProduct.image}></img> : <img className="imgUploaded" alt="imgUpload" src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/6/5/2/652a7adb1b_98148_01-intro-773.jpg"></img>}
          <input required type="url" pattern="https?://.+" className="inputStyle" placeholder="Lien vers le site" name="link" value={newProduct.value} onChange={handleChange}></input>
          <div className="twoInputLign">
          <input required type="decimal" pattern="[0-9]+(\.[0-9][0-9])?" className="inputStyle" placeholder="Prix du produit (12.60)" name="price" value={newProduct.value} onChange={handleChange}></input>
          <input required type="number" className="inputStyle" placeholder="Quantité" name="quantity" value={newProduct.value} onChange={handleChange}></input>
          </div>
          <div className="btnPositionnement">
          <ButtonText value="Valider" type="submit"  />
          <ButtonText value="Supprimer" type="reset"  callBack={() => document.getElementById('formAddProduct').reset()}/>
          </div>
        </div>
      </form>
    </div>
  )
}
export default CrudProduct;