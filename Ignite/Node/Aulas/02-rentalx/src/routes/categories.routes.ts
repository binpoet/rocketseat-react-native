import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/categories', (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

categoriesRoutes.post('/categories', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  try {
    const category = createCategoryService.execute({
      name,
      description,
    });

    return response.status(201).json(category);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export { categoriesRoutes };
