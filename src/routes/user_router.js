import { Router } from "express";
import {
    signup,
    login
} from "../controllers/user_controller.js";

import checkToken from "../middleware/check_token.js";
import checkRole from "../middleware/check_role.js";
import viaCep from "../middleware/via_cep.js";

const router = Router();

router.post("/signup", viaCep, signup);
router.post("/login", login);

export default router;
