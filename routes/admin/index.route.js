const dashboardRoutes = require("./dashboard.route.js");
const systemConfig = require("../../config/system.js");
const productsRoutes = require("./product.route.js")
module.exports = (app) =>{
    const PATH_ADMIN = systemConfig.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
    app.use(PATH_ADMIN + "/products", productsRoutes);
}