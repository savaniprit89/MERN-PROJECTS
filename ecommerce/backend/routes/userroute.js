const express = require("express");
const {registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser} =require("../controllers/user.js")
const router =express.Router();
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth.js');
router.route('/register').post(registerUser);
router.route('/login').post(loginUser)
router.route('/forget').post(forgotPassword)
router.route('/reset/:token').put(resetPassword)
router.route('/logout').get(logout)
router.route('/me').get(getUserDetails,isAuthenticatedUser)
router.route("/password/update").put(isAuthenticatedUser,updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)


  router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser).put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;