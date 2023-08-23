import LoginRegisterService from '../service/LoginRegisterService'


const ApiHome = (req, res) => {
    return res.status(200).json({
        message: 'hello',
        data: 'iasda'
    })
}

const handleregister = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(200).json({
            EM: 'missing required',
            EC: -1,
            DT: ''
        })
    }
    console.log(">>> call me:", req.body)
    //service: create user
    const data = await LoginRegisterService.RegisterNewUser(req.body);
    console.log(">>> call me:", data)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: ''
    })

}

const handlelogin = async (req, res) => {
    try {
        const data = await LoginRegisterService.handlelogin(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(">>> error: ", error)
    }
}


const AddProduct = ( async (req, res) => {
    try {
        console.log(">>>Check Upload images:", req.body)
        console.log(">>>Check info images:", req.file.filename)
        const data = await LoginRegisterService.handleAddProduct(req.body , req.file.filename);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(">>>Check error: ", error)

    }
})

const Renderimage = async (req,res)=>{
    const data = await LoginRegisterService.RenderListImage()
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
//chi tiết sản phẩm 
const ProductDetail = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.ProductDetailInformation(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
// lọc sản phẩm theo type
const ProductFilter = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.ProductFilterFolowType(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
// delete product
const DeleteProduct = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.DeleteProductInDB(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
//update product

const UpdateProduct = async (req,res) =>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.UpdateProductInDB(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}

const FindProductInDB = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.FindProduct(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
// add product to bag

const AddToBag = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.AddProductToBag(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}

//show product in bag
const ShowProductInBag = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.ShowProductHaveInBag(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
// remove product

const RemoveProduct = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.RemoveProductInBag(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}

const ThanhToan  = async(req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.ThanhToanProduct(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
// save vao Bin
const SaveBin = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.SaveRecycleBin(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
//RecycleBin

const RecycleBin = async (req,res)=>{
    console.log(">>>Check req.body:", req.body)
    const data = await LoginRegisterService.RecycleBinData(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
    })
}
module.exports = {
    ApiHome, handleregister, handlelogin, AddProduct,Renderimage,ProductDetail,ProductFilter,DeleteProduct,UpdateProduct,
    FindProductInDB,AddToBag,ShowProductInBag,RemoveProduct,ThanhToan,SaveBin,RecycleBin
}
