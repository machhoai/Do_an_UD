
import { json } from 'body-parser';
import db from '../models/index.js';
import bcrypt from 'bcrypt';
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
                EC: 1
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
                EM: 'the email is exist',
                EC: 1
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
                    attributes: ['email'],
                    where: {
                        email: rawData.email,
                        '$Group.groupName$': "admin"
                    },
                });
                console.log(JSON.stringify(CorrectPassword, null, 2));
                console.log(">>> login is success")

                if (CheckCermissions) {
                    return {
                        EM: 'oke',
                        EC: 4,
                        DT: ''
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
module.exports = {
    RegisterNewUser, handlelogin, handleAddProduct,RenderListImage,ProductDetailInformation, ProductFilterFolowType,DeleteProductInDB
    ,UpdateProductInDB,FindProduct
}
