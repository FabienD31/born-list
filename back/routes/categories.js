const express = require("express");
const router = express.Router();
const mysqlConnection = require("../dbConnection.js");


//get all categories
router.get('/', (req, res)  =>  {  
  try{
     mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
      if (!err)
      res.status(200).json(rows);
      else
        console.log(err);
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;

