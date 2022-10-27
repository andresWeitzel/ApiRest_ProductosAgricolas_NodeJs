const { Router } = require("express");
import * as tabacoController from "../controllers/tabaco.controller";
const router = Router();


//==== POST ====
router.post("/tabaco/", tabacoController.createObj);
//==== POST ====
router.delete("/tabaco/:id", tabacoController.deleteObj);
//==== GET ALL ====
router.get("/tabaco/list", tabacoController.getAllObj);
//==== GET BY ID ====
router.get("/tabaco/:id", tabacoController.getById);



module.exports = router;
