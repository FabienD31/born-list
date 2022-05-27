import "./CrudProduct.css";
import { Link } from "react-router-dom";
import ButtonText from "../../components/button/ButtonText.jsx";


const CrudProduct = () => {
  return (
    <div>
      <div className="btnCategory">
        <Link to="/categoryManager"><ButtonText value="Gestion des categories" callBack={()=>{}} /></Link>
      </div>
      <h1>CrudProduct</h1>
      <div className="cardPositionnement">
        <div className="cardCreate">
          <input className="inputStyle" placeholder="Nom du produit"></input>
          <img className="imgUploaded" alt="imgUploaded" src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/6/5/2/652a7adb1b_98148_01-intro-773.jpg"></img>
          <input className="inputStyle" placeholder="Lien vers le site"></input>
          <input className="inputStyle" placeholder="Prix du produit"></input>
          <div className="btnPositionnement">
          <ButtonText value="Valider" callBack={()=>{}} />
          <ButtonText value="Supprimer" callBack={()=>{}} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CrudProduct;