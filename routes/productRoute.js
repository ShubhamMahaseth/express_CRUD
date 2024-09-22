const express = require("express");
const {
  handleProducts,
  createProduct,
  handleDelete,
  handleEdit,
  handlePagination,
} = require("../controllers/product");
const auth = require("../middlewares/Auth");
const router = express.Router();

router.get("/pagination", handlePagination);
router.get("/", handleProducts);
router.get("/:id", handleProducts);
router.post("/", createProduct);
router.delete("/:id", handleDelete);
router.put("/:id", handleEdit);
module.exports = router;
