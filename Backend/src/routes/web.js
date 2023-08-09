import express from  "express"

const router = express.Router();

const initWebRouter = (app) => {


    return app.use("/",router)
}

export default initWebRouter;