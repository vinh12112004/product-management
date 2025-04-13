const Product = require("../../models/product.model");
// [GET] /products

module.exports.index = async (req, res) => {
    const products = await Product.find({
        status : "active",
        deleted : "false"
    });
    const newProduct = products.map(item => {
        return {
            ...item.toObject(),
            priceNew: (item.price * (100 - item.discountPercentage) / 100).toFixed(2)
        };
    })
    console.log(newProduct);
    res.render('client/pages/products/index.pug',{ 
        titlePage : "Trang san pham",
        products : newProduct
    })
  };