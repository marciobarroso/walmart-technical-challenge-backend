import { Router } from 'express'

import * as HealthCheckController from '../controllers/HealthCheckController'

const router: Router = Router()

// health check
router.get('/health-check', HealthCheckController.index)

export default router