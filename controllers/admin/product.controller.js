// [GET] /admin/products

const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
    const products = await Product.find({
        deleted : false
    }).lean();
    res.render("admin/pages/products/index",{
        pageTitle : "trang tong quan",
        products : products
    });
  }