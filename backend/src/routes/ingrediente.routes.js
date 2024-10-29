import { Router } from "express";
import { createIngrediente, getIngrediente, getIngredientes, deleteIngrediente, updateIngrediente } from '../controllers/ingrediente.controller.js';

const router = Router();

router.post('/', createIngrediente);         
router.get('/all', getIngredientes);        
router.get('/:id', getIngrediente);          
router.delete('/:id', deleteIngrediente);    
router.put('/:id', updateIngrediente);       

export default router;
