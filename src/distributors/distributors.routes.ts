import { Router } from "express";
<<<<<<< HEAD
import { sanitizeDistributorInput, findAll, findOne, add, update, remove } from "./distributor.controler.js";
import { authMiddleware, adminOnly } from "../shared/auth.middleware.js";
=======
import { sanitizeDistributorInput, findAll, findOne, add, update,remove } from "./distributor.controler.js";
import { authenticateToken } from "../users/verifyToken.js";
import { authorizeRole } from "../users/authzoritation.js";

>>>>>>> upstream/main

export const distributorRouter = Router()

distributorRouter.get('/', findAll)
distributorRouter.get('/:CUIL', findOne)
<<<<<<< HEAD
distributorRouter.post('/', authMiddleware, adminOnly, sanitizeDistributorInput, add)
distributorRouter.put('/:CUIL', authMiddleware, adminOnly, sanitizeDistributorInput, update)
distributorRouter.patch('/:CUIL', authMiddleware, adminOnly, update)
distributorRouter.delete('/:CUIL', authMiddleware, adminOnly, remove)
=======
distributorRouter.post('/', authenticateToken, authorizeRole('Empleado'), sanitizeDistributorInput, add)
distributorRouter.put('/:CUIL', authenticateToken, authorizeRole('Empleado'), sanitizeDistributorInput, update)
distributorRouter.patch('/:CUIL', authenticateToken, authorizeRole('Empleado'), update)
distributorRouter.delete('/:CUIL', authenticateToken, authorizeRole('Empleado'), remove)
>>>>>>> upstream/main
