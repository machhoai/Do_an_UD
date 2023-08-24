
import { json } from 'body-parser';
import db from '../models/index.js';
import bcrypt from 'bcrypt';
import fs from 'fs'
const path = require('path');
const { Op, where } = require('sequelize');

const salt = bcrypt.genSaltSync(10);
const HashPass = (UserPassword) => {
    const hashPassword = bcrypt.hashSync(UserPassword, salt);
    return hashPassword;
}

const CkeckEmail = async (emailUser) => {

    const emailUsers = await db.Users.findOne({ where: { email: emailUser } });
    console.log(">>> check email: ", emailUsers)
    if (emailUsers) {
        return true;
    }
    return false;

}
//sale
const RenderListImage = async () => {

    try {
        const getnameimage = await db.Products.findAll(
            {
                where:{
                    sale:{[Op.ne]: 0}
                }
            }
        );
        console.log(">>>render name image:", getnameimage)
        return {
            EM: '>>>render list image',
            EC: 0,
            DT: getnameimage
        }
    } catch (error) {
        console.log(">>>>Error at renderListImage: ", error)
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}

const RegisterNewUser = async (rawUser) => {
    try {


        //check emai is exist ?
        const checkemail = await CkeckEmail(rawUser.email);
        if (checkemail === true) {
            return {
                EM: 'the email is exist',
                EC: 2
            }
        }
        //hash password
        const HashPassword = HashPass(rawUser.password);
        //create mauser


        const newuser = await db.Users.create({
            username: rawUser.username,
            email: rawUser.email,
            phone: rawUser.phone,
            password: HashPassword,
            groupId: 1
        });


        console.log(">>>check user:", newuser)

        const users = await db.Users.findAll({
            include: { model: db.Groups }
        });
        console.log(JSON.stringify(users, null, 2));

        return {
            EM: 'create a user success',
            EC: 0
        }
    } catch (e) {
        console.log(">>> check error: ", e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3
        }
    }
}
// check maproduct
const checkProductCode = async (rawdata) => {
    const maproduct = await db.Products.findOne({
        where: {
            maProduct: rawdata
        }
    })
    if (maproduct) {
        return true;
    }
    return false;
}

const handleAddProduct = async (rawData, nameImage) => {

    try {

        const checkMaProduct = await checkProductCode(rawData.maproduct);
        if (checkMaProduct === true) {
            console.log(">>> maproduct is exits:")
            return {
                EM: 'the maproduct is exist',
                EC: 1,
                DT:''
            }
        }
        console.log(">>> maproduct is not exits", rawData.maproduct)
        const product = await db.Products.create({
            maProduct: rawData.maproduct,
            productName: rawData.nameproduct,
            soLuong: rawData.soluong,
            price: rawData.price,
            productInfo: rawData.productinfomation,
            sale: rawData.sale,
            type: rawData.type,
            nameImage: "http://localhost:3000/ImageUpload/" + nameImage
        })
        return {
            EM: 'add success',
            EC: 0,
            DT:''
        }

    } catch (error) {
        console.log(">>>Check error at add product", error)
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
//chi tiết sản phẩm
const ProductDetailInformation = async (rawData)=>{
    try{
        console.log(">>>Check rawData:", rawData)
        const product = await db.Products.findOne({
            where:{
                maProduct: rawData.maProduct
            }
        })
        console.log(">>>Check product:", product)
        return {
            EM: '>>>render list image',
            EC: 0,
            DT: product
        }
    }catch(e)
    {
        console.log(">>>check error at ProductDetailInformation: ", e)
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
} 

// login

// check password

const checkPassword = (password, hashpass) => {
    return bcrypt.compareSync(password, hashpass);
}

const handlelogin = async (rawData) => {
    try {
        //check email
        const CheckEmail = await db.Users.findOne({
            where: { email: rawData.email },
            attributes: ['email', 'password']
        })
        console.log(">>> email of user :", CheckEmail.email, " password: ", CheckEmail.password);
        if (CheckEmail) {

            console.log(">>> input pass: ", rawData.password, " Hashpass: ", CheckEmail.password)
            const CorrectPassword = checkPassword(rawData.password, CheckEmail.password);
            if (CorrectPassword === true) {
                const CheckCermissions = await db.Users.findOne({
                    include: {
                        model: db.Groups,
                        attributes: ['groupName']
                    },
                    attributes: ['email','mauser'],
                    where: {
                        email: rawData.email,
                        '$Group.groupName$': "admin"
                    },
                });
                console.log(JSON.stringify(CorrectPassword, null, 2));
                console.log(">>> login is success",CheckCermissions)

                if (CheckCermissions) {
                    return {
                        EM: 'oke',
                        EC: 4,
                        DT: CheckCermissions
                    }
                }
                else {
                    return {
                        EM: 'oke',
                        EC: 0,
                        DT: ''
                    }
                }
            }
            else {
                console.log(">>> login is fail")
                return {
                    EM: 'password or email is wrong',
                    EC: 1,
                    DT: ''
                }
            }
        }
        else {
            return {
                EM: 'email or password is not correct',
                EC: 2,
                DT: ''
            }
        }

    } catch (error) {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }



}

//lọc sản phẩm theo type
const ProductFilterFolowType = async (rawData)=>{
    try{
        console.log(">>> rawData: ",rawData)
        const productOfType = await db.Products.findAll({
            where:{
                type: rawData.Type
            }
        })

        console.log(">>> information type of product: ",productOfType)
        return{
            EM:'return information of product is success',
            EC: 0,
            DT: productOfType
        }

    }catch(error)
    {
        console.log(">>>Check error at ProductFilterFolowType",error)
        return{
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}

//delete product
const DeleteProductInDB = async(rawData)=>{
    try{
        const Delete = await db.Products.destroy({
            where:{
                maProduct:rawData.ma
            }
        });
        return {
            EM: 'delete success',
            EC: 0,
            DT: ''
        }
    }catch(error)
    {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}

//update product
const UpdateProductInDB = async (rawData) =>{
    try{
        const checkMaProduct = checkProductCode(rawData.maProduct)
        console.log(">>>check ma product: ",rawData.maProduct)
        if(checkMaProduct === true){
            return{
                EM: 'the email is exist',
                EC: 1,
                DT:''
            }
        }
        else{
            if(rawData.nameproduct !==""){
            await db.Products.update({
                productName: rawData.nameproduct
            },{
                where:{
                    maProduct: rawData.maProduct
                }
            }
           )
            }
            if(rawData.price !=="")
            {
                await db.Products.update({
                    price: rawData.price
                },{
                    where:{
                        maProduct: rawData.maProduct
                    }
                })
            }
            if(rawData.sale !==0){
                await db.Products.update({
                    sale: rawData.sale
                },{
                    where:{
                        maProduct: rawData.maProduct
                    }
                })
            }   
            if(rawData.soluong !==0){
                await db.Products.update({
                    soLuong:rawData.soluong
                },{
                    where:{
                        maProduct: rawData.maProduct
                    }
                })
            }
            return{
                EM: 'update success',
                EC: 0,
                DT:''
            }
        }
    }catch(error)
    {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}

const FindProduct = async (rawData)=>{
    try{

        const product = await db.Products.findOne({
            where:{
                maProduct: rawData.maProduct
            }
        })
            
        console.log(">>>check ma product: ",rawData.maProduct)
        if(product){
            return{
                EM: 'find success',
                EC: 0,
                DT:product
            }
            
        }
        else{
            return{
                EM: 'not found',
                EC: 1,
                DT:null
            }
            
        }

    }catch(error){
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
// add product to bag
const AddProductToBag = async(rawData)=>{
    try{

        //kiem tra so luong trong kho
        const SoLuongTrongKho = await db.Products.findOne({
            where:{
                maProduct:rawData.maProduct
            },
            attributes:['soLuong']
        })
        console.log(">>>check so luong trong kho: ", SoLuongTrongKho.soLuong)
        if((SoLuongTrongKho.soLuong - rawData.soluong) >= 0)
        {
            const FindCodeSize = await db.Sizes.findOne({
                where:{
                    size: rawData.size
                },
                attributes:['sizeId']
            })

            console.log(">>>check FindCodeSize: ", FindCodeSize.sizeId)

            const productBag = await db.Purchases.create({
                mauser: rawData.mauser,
                maProduct:rawData.maProduct,
                sizeId: FindCodeSize.sizeId,
                soLuongMua: rawData.soluong,
                thanhTien: rawData.thanhtien,
                
            })
            console.log(">>>check productBag: ", productBag)
            return {
                EM: 'add success',
                EC: 0,
                DT: ''
            }
        }
        else{
            return {
                EM: 'not enough',
                EC: 1,
                DT: ''
            }
        }
        
    }catch(error)
    {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
//
const ShowProductHaveInBag = async(rawData)=>{
    try{
        const DataOfProduct = await db.Users.findAll(
        {
            
            include:[{
                model: db.Products,
                through: { model: db.Purchases, attributes: ['soLuongMua','thanhTien'] },
                attributes:['maProduct','productName','soLuong','price','sale','nameImage','type'],
                where:{
                },
                
            },
            {
                model: db.Sizes,
                    attributes:['size'],
                    through: { model: db.Purchases, attributes: [] },
                    where:{
                    }
            }
        ],
            attributes:['mauser','username'],
            where:{
                mauser: rawData.mauser
            }

            
        }
        )
        console.log(">>>check Purchases.maProduct: ",JSON.stringify(DataOfProduct) )
        if(DataOfProduct.length > 0){
            return {
                EM: 'show product in bag',
                EC: 0,
                DT: DataOfProduct
            }
        }
        else{
            return {
                EM: 'not has product in bag',
                EC: 1,
                DT: DataOfProduct
            }
        }
        
    }catch(e)
    {
        console.log(">>> check error: ", e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
// RemoveProductInBag 
const RemoveProductInBag = async (rawData)=>{
    try{
        const Remove = await db.Purchases.destroy({
            where:{
                maProduct: rawData.maProduct
            }
        })
        console.log(">>> check Remove: ", Remove);
        return {
            EM: 'remove the product is success',
            EC: 0,
            DT: Remove
        }
    }catch(e)
    {
        console.log(">>> check error: ", e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
//thanh toan 
const ThanhToanProduct = async(rawData)=>{
    try{
        //so luong trong kho sau khi thanh toan
        const soluongmua = await db.Purchases.findAll({
            attributes:['maProduct','soLuongMua']
        })
        console.log(">>> check soluongmua: ", JSON.stringify(soluongmua[0]));
        for (let i = 0; i < soluongmua.length; i++){
            const SoLuong = await db.Products.findOne({
                where:{
                    maProduct: soluongmua[i].maProduct
                },
                attributes:['soLuong']
            })
            console.log(">>> check SoLuong: ", JSON.stringify(SoLuong));
            const updateSoLuongTrongKho = await await db.Products.update({
                    soLuong:(SoLuong.soLuong - soluongmua[i].soLuongMua)
                },{
                    where:{maProduct:soluongmua[i].maProduct}
                })
            console.log(">>> check updateSoLuongTrongKho: ", JSON.stringify(updateSoLuongTrongKho));
        }
        
        const thanhtoanPurchases = await db.Purchases.destroy({
            where:{
                mauser: rawData.mauser
            }
        })

        console.log(">>> check thanhtoanPurchases: ", JSON.stringify(thanhtoanPurchases) );
        
        return {
            EM: 'thanh toan thanh cong',
            EC: 0,
            DT: ''
        }
    }catch(e)
    {
        console.log(">>> check error: ", e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
// save vao Bin
const SaveRecycleBin = async(rawData)=>{
    try {
        
        const Save = await db.Products.findOne({
            where:{
                maProduct: rawData.ma
            },
            attributes:['maProduct','productName','soLuong','price','productInfo','sale','nameImage','type']
        })
        const jsonPath = path.join(__dirname, 'Data.json');
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        // Dữ liệu mới cần thêm
        const newItem = { Product: Save };
        jsonData.push(newItem);
        const updatedData = JSON.stringify(jsonData, null, 2); // Định dạng dữ liệu cho dễ đọc
        fs.writeFileSync(jsonPath , updatedData);
        
        const newdata = fs.readFileSync(jsonPath, 'utf8');
        console.log(">>>check json:", JSON.parse(newdata) )
        return {
            EM: 'save to recycle bin',
            EC: 0,
            DT: (JSON.parse(newdata))
        }
    } catch (e) {
        console.log(">>> check error: ", e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
// đọc dữ liệu
const RecycleBinData = async (rawData)=>{
    try {
        const jsonPath = path.join(__dirname, 'Data.json');
        const newdata = fs.readFileSync(jsonPath, 'utf8');
        console.log(">>>check json:", JSON.parse(newdata) )
        return {
            EM: ' recycle bin',
            EC: 0,
            DT: (JSON.parse(newdata))
        }
    } catch (error) {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
//change password
const ChangePassword = async (rawData)=>{
    try {
        const newPass = HashPass(rawData.newpass);

        const ChangePass = await db.Users.update({password:newPass},{
            where:{
                mauser: rawData.mauser
            }
        })
        return {
            EM: 'change success',
            EC: 0,
            DT: ''
        }
        
    } catch (error) {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
// get infor user
const InforUser = async (rawData)=>{
    try{

        const InformationUser = await db.Users.findOne({
            where:{
                mauser: rawData.mauser
            },
            attributes:['username','email','phone']
        })
        console.log(">>>Check infor user: ",InformationUser)
        return {
            EM: 'information user',
            EC: 0,
            DT: InformationUser
        }
    }catch(error)
    {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
//GetProductInBag
const GetProductBag =async (rawData)=>{
    try{

        const Added = await db.Products.create({
            maProduct: rawData.maProduct,
            productName: rawData.productName,
            soLuong: rawData.soLuong,
            price: rawData.price,
            productInfo: rawData.productInfo,
            sale: rawData.sale,
            nameImage: rawData.nameImage,
            type: rawData.type,
        })
        console.log(">>> check Added: ", Added);
        return {
            EM: 'Add success',
            EC: 0,
            DT: ''
        }
    }catch(error)
    {
        console.log(">>> check error: ", error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }
}
module.exports = {
    RegisterNewUser, handlelogin, handleAddProduct,RenderListImage,ProductDetailInformation, ProductFilterFolowType,DeleteProductInDB
    ,UpdateProductInDB,FindProduct,AddProductToBag,ShowProductHaveInBag,RemoveProductInBag,ThanhToanProduct,SaveRecycleBin,RecycleBinData
    ,ChangePassword,InforUser,GetProductBag
}
