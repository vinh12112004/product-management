// [GET] /admin/products

const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
    let filterStatus = [
        {
            name : "Tất cả",
            status : "",
            class : ""
        },
        {
            name : "Hoạt động",
            status : "active",
            class : ""
        },
        {
            name : "Dừng hoạt động",
            status : "inactive",
            class : ""
        }
    ];
    if(req.query.status){
        let index = filterStatus.findIndex(item => item.status == req.query.status);
        filterStatus[index].class = "active";
    }else{
        filterStatus[0].class = "active";
    }
    let find = {
        deleted : false
    };
    if(req.query.status)
        find.status = req.query.status;
    const products = await Product.find(find).lean();
    res.render("admin/pages/products/index",{
        pageTitle : "trang tong quan",
        products : products,
        filterStatus : filterStatus
    });
  }