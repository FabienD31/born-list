import "./tableContributor.css";
import array from "./testFake.js";

const TableContributor = () => {  
  return (
    <div>
      <h1>Tableau des contributions</h1>
      {array.length ?
      <div className="array">
        <table id="tb">
          <tr id="head">
            <th>Nom</th>
            <th>Contribuable</th>
            <th>Date</th>
            <th>Montant (EUR)</th>
          </tr>
          {
            array.map((item) => 
          <tr key={item.id} id="body">
            <td>{item.name}</td>
            <td>{item.contributor}</td>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        )}
        </table>
    </div>
        : <p className="infoEmpty">Pas de contribution</p>}
  </div>
  )
}

export default TableContributor;