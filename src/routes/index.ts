import { Router } from "express";

import { categoriesRoutes } from "./categories.routers";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
