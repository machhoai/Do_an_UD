import express from  "express"
import ApiController from "../controller/ApiController.js"
const router = express.Router();

const initApiRouter = (app) => {

    router.get('/apihome', ApiController.ApiHome),
    router.post('/apiregister', ApiController.handleregister)
    router.post('/apilogin', ApiController.handlelogin)

    return app.use('/api',router)
}

export default initApiRouter;