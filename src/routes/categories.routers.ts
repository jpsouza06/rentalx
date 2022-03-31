import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, reponse) => {
  const { name, description } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return reponse.status(201).json({ category });
});

export { categoriesRoutes };
