const { Router } = require('express');
const controller = require('./controller');
const {requiredLogin, hasRole} = require("../../middlewares/auth");
const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/me",requiredLogin,  controller.getme);
router.get("/logout", controller.logout);
router.post("/valid", controller.changeValidEmail);
router.get("/kakao/login", controller.kakaoLogin);
router.post("/mail", requiredLogin, controller.resendMail);
router.put("/:email", hasRole, controller.changeUser);
module.exports = router;
