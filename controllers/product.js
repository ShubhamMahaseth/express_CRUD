const productModel = require("../models/products.model");
const productsModel = require("../models/products.model");

async function handleProducts(req, res) {
  const { id } = req.params;
  let result = [];
  if (id) {
    result.push(await productsModel.findById(id));
  } else {
    result = await productsModel.find({});
  }
  res.status(200).json({ message: "response", success: true, result });
}

async function createProduct(req, res) {
  const { productName } = req.body;
  try {
    const product = new productsModel({ productName });
    product.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
}

async function handleDelete(req, res) {
  const { id } = req.params;
  try {
    const findID = await productsModel.findById(id);
    if (findID) {
      await productsModel.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: "Deleted successfully", success: true });
    } else {
      return res.status(403).json({ message: "ID is not there is database" });
    }
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
}

async function handleEdit(req, res) {
  const { id } = req.params;
  const productName = req.body;
  console.log(id, productName, "mm");

  try {
    const updated = await productModel.findByIdAndUpdate(id, productName, {
      new: true,
    });
    console.log(updated, "up");

    if (updated) {
      return res.status(200).json({ message: "edited done", success: true });
    }
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
}

 async function handlePagination(req, res) {
  console.log(req.query,'req')

  try {
    return res.status(200).json({message:"successful"})
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
}

module.exports = {
  handleProducts,
  createProduct,
  handleDelete,
  handleEdit,
  handlePagination,
};
