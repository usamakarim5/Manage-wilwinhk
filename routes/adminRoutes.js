const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const {
  adminSignupValidation,
  loginValidation,
  blogValidation,
  validationsForAddingProducts,
  passwordValidation,
} = require("../middleware/validation");
const uploadImages = require("../middleware/uploadFile");

const { adminSignup } = require("../controllers/adminSignup");
const { adminLogin } = require("../controllers/adminLogin");
const { adminDetails } = require("../controllers/fetchAdmindetails");
const { fetchCustomers } = require("../controllers/getCustomersLists");
const { adminAddProduct } = require("../controllers/adminAddProduct");
const { adminDeleteProduct } = require("../controllers/adminDeleteProduct");
const { adminFetchProducts } = require("../controllers/adminFetchProducts");
const { fetchAllOrders } = require("../controllers/fetchAllOrders");
const { deleteCustomer } = require("../controllers/deleteCustomer");
const { getRecentOrders } = require("../controllers/adminRecentOrders");
const {
  completedRecentOrders,
} = require("../controllers/completedRecentOrder");
const { adminOrderStatus } = require("../controllers/adminOrderStatus");
const { getTotalOrders } = require("../controllers/adminGetTotalOrders");
const { getTopProducts } = require("../controllers/topProductsSold");
const { getSalesPerMonth } = require("../controllers/salesPerMonth");
const { checkPaymentHistory } = require("../controllers/checkPaymentHistory");
const { addBlog } = require("../controllers/addBlog");
const { fetchBlogs } = require("../controllers/fetchBloges");
const { fetchSingleBlog } = require("../controllers/fetchSingleBlog");
const { updateBlog } = require("../controllers/updateBlog");
const { deleteBlog } = require("../controllers/deleteBlog");
const { adminVerifyerifyMail } = require("../mails/adminVerifyMail");
const {
  customerLastFewMonths,
} = require("../controllers/customerLastFewMonths");
const { totalCustomers } = require("../controllers/totalCustomers");
const { addAboutUs } = require("../controllers/addAboutUs");
const { getAboutUs } = require("../controllers/getAboutUs");
const {
  termsContions,
  getTermsConditions,
} = require("../controllers/termsCondition");
const { getPrivecy, privecyPolicy } = require("../controllers/privecyPolicy");
const { getShipping, ShippingDelivery } = require("../controllers/Shipping");
const { getRefund, refund } = require("../controllers/Refund");
const { addLogo } = require("../controllers/addLogo");
const { getLogo } = require("../controllers/getLogo");
const { addAddressOne } = require("../controllers/addAddressOne");
const { getAddressOne } = require("../controllers/getAddressOne");
const { addAddressTwo } = require("../controllers/addAddressTwo");
const { getAddressTwo } = require("../controllers/getAddressTwo");
const { getCustomerGraph } = require("../controllers/GraphCustomer");
const { seassionsByCountry } = require("../controllers/seassionsByCountry");
const { getOrderGraph } = require("../controllers/getOrderGraph");
const { forgetPasswordAdmin } = require("../controllers/forgetPasswordAdmin");
const { resetPasswordAdmin } = require("../controllers/resetPasswprdAdmin");

router.post("/signup", adminSignupValidation, adminSignup);
router.get("/verify/:id", adminVerifyerifyMail);
router.post("/login",  adminLogin);
router.post("/forgotPassword", forgetPasswordAdmin);
router.post("/resetPassword", passwordValidation, resetPasswordAdmin);
router.get("/fetchData", fetchUser, adminDetails);
router.get("/getCustomers", fetchUser, fetchCustomers);
router.post(
  "/adminAddProduct",
  validationsForAddingProducts,
  uploadImages,
  fetchUser,
  adminAddProduct
);
router.delete("/adminDeleteProduct/:id", fetchUser, adminDeleteProduct);
router.get("/getAllProducts", adminFetchProducts);
router.get("/fetchAllOrders", fetchUser, fetchAllOrders);
router.delete("/deleteCustomer/:id", fetchUser, deleteCustomer);
router.get("/getRecentOrders", fetchUser, getRecentOrders);
router.get("/completedRecentOrder", fetchUser, completedRecentOrders);
router.patch("/getOrderStatus/:id", fetchUser, adminOrderStatus);
router.get("/getTotalOrders", fetchUser, getTotalOrders);
router.get("/getTopProducts", fetchUser, getTopProducts);
router.get("/getSalesPerMonth", fetchUser, getSalesPerMonth);
router.get("/checkPaymentHistory", fetchUser, checkPaymentHistory);

//BLOGS ROUTES
router.post("/addBlog", uploadImages, blogValidation, fetchUser, addBlog);
router.get("/fetchBlogs", fetchBlogs);
router.get("/fetchSingleBlog/:id", fetchSingleBlog);
router.patch("/updateBlog/:id", fetchUser, updateBlog);
router.delete("/deleteBlog/:id", fetchUser, deleteBlog);

//Customers
router.get("/customers", customerLastFewMonths);
router.get("/totalCustomers", totalCustomers);

//About Us
router.post("/aboutus", uploadImages, addAboutUs);
router.get("/getAboutus", getAboutUs);

//Terms n Conditions
router.put("/terms", termsContions);
router.get("/getTerms", getTermsConditions);

//shipping
router.put("/shipping", ShippingDelivery);
router.get("/getShipping", getShipping);

//refund & return
router.put("/refund", refund);
router.get("/getRefund", getRefund);

//Privecy Policy
router.get("/getPrivecyPolicy", getPrivecy);
router.put("/privecyPolicy", privecyPolicy);

// Logo
router.post("/addLogo", uploadImages, addLogo);
router.get("/getLogo", getLogo);

// AddressOne
router.post("/addAddressOne", addAddressOne);
router.get("/getAddressOne", getAddressOne);

// AddressTwo
router.post("/addAddressTwo", addAddressTwo);
router.get("/getAddressTwo", getAddressTwo);
// Seassions
router.get("/countries", seassionsByCountry);

// Graphs
router.get("/graphCustomer", getCustomerGraph);
router.get("/graphOrder", getOrderGraph);
// router.get()
module.exports = router;
