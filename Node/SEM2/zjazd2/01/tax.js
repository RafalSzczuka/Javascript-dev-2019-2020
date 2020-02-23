const express = require("express");
const router = express.Router();

const calculateTax = (tax, amount) => {
  const taxAmount = (tax / 100) * amount;
  const income = amount - taxAmount;
  return { taxAmount, income };
};

router.post("/podatek", (req, res) => {
  const { tax, amount } = req.body;
  const result = calculateTax(tax, amount);

  res.send(result);
});

module.exports = router;
