import { Router } from 'express'

import * as HealthCheckController from '../controllers/HealthCheckController'
import * as productController from '../controllers/ProductController'

const router: Router = Router()

// health check
router.get('/health-check', HealthCheckController.index)

// product
router.get('/products', productController.index)

export default router