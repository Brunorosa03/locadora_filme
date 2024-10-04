import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,

  // logado,
} from "../controllers/rented_controler.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["ADM"]), store); // Somente adm
router.get("/", check_token, check_role(["USU"]), index); // Somente usuário
router.get("/:id", check_token, show);
router.put("/:id", check_token, update);
router.delete("/:id", check_token, destroy);

export default router;