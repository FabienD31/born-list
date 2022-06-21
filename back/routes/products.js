const express = require("express");
const router = express.Router();
const mysqlConnection = require("../dbConnection.js");


//get all products
router.get('/', async (req, res, next) => {  
  try{
    await mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
      if (!err)
      res.status(200).json(
        rows
      );
      else next(err);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

//get 1 product
router.get('/:id', (req, res) => {  
  mysqlConnection.query('SELECT * FROM product WHERE idProduct = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  });
});

//delete 1 product
router.delete('/:id', (req, res) => {  
  mysqlConnection.query('DELETE FROM product WHERE idProduct = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
      res.send("delete success");
    else
      console.log(err);
  });
});

// create 1 produit
router.post("/", (req, res) => {
  const product = req.body;
  console.log(product);
  mysqlConnection.query('INSERT INTO product SET ?', product, (err, rows, fields) => {
    if (!err)
      res.send("product created");
    else
    res.send(err);
  });
});

// update 1 produit
router.put("/:id", (req, res) => {
  const product = req.body;
  const sql = "UPDATE product SET name=?, price=?, link=?, reserved=? , Category_idCategory=? WHERE idProduct=?";
  const params = [product.name, product.price, product.link,product.reserved, product.Category_idCategory, req.params.id];
  mysqlConnection.query(sql, params, (err, rows, fields) => {
    if (!err)
      res.send("product updated");
    else
      console.log(err);
  });
});
 


module.exports = router;
