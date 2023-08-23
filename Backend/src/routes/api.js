import express from "express"
import ApiController from "../controller/ApiController.js"
const multer = require('multer');

const router = express.Router();

const initApiRouter = (app) => {
    // upload images
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            return cb(null, './src/public/ImageUpload/');
        },
        filename: (req, file, cb) => {
            return cb(null, Date.now() + '-' + file.originalname);
        }
    });

    // Create the multer instance
    const upload = multer({ storage: storage });


    router.get('/apihome', ApiController.ApiHome),
    router.post('/apiregister', ApiController.handleregister)
    router.post('/apilogin', ApiController.handlelogin)
    router.post('/apiproduct', upload.single('file'), ApiController.AddProduct)
    router.get('/getimage',ApiController.Renderimage)
    router.post('/productdetail',ApiController.ProductDetail)
    router.post('/productfilter',ApiController.ProductFilter)
    router.post('/deleteproduct',ApiController.DeleteProduct)    
    router.post('/updateproduct',ApiController.UpdateProduct)   
    router.post('/findproduct',ApiController.FindProductInDB)
    router.post('/addtobag',ApiController.AddToBag) 
    router.post('/showbag',ApiController.ShowProductInBag) 
    router.post('/removeproduct',ApiController.RemoveProduct)
    router.post('/thanhtoan',ApiController.ThanhToan)
    router.post('/savebin',ApiController.SaveBin)
    router.post('/recyclebin',ApiController.RecycleBin)
    return app.use('/api', router)
}

export default initApiRouter;