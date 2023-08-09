
import db from '../models/index.js';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
const HashPass = (UserPassword) => {
    const hashPassword = bcrypt.hashSync(UserPassword, salt);
    return hashPassword;
}

const CkeckEmail = async (emailUser) => {

    const emailUsers = await db.Users.findOne({ where: { email: emailUser } });
    console.log(">>> check email: ",emailUsers)
    if (emailUsers) {
        return true;
    }
    return false;

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
            groupId: 2
        });


        console.log(">>>check user:",newuser)

        const users = await db.Users.findAll({
            include: { model: db.Groups }
          });
          console.log(JSON.stringify(users, null, 2));

        return {
            EM: 'create a user success',
            EC: 0
        }
    } catch (e) {
        console.log(">>> check error: ",e);
        return {
            EM: 'something wrongs in service ...',
            EC: 3
        }
    }
}

// login

// check password

const checkPassword = (password, hashpass)=>
{
    return bcrypt.compareSync(password, hashpass);
}

const handlelogin = async (rawData)=>{
    try{
        //check email
        const CheckEmail = await db.Users.findOne({
            where:{email : rawData.email},
            attributes: ['email', 'password'] 
        })
        console.log(">>> email of user :", CheckEmail.email, " password: ", CheckEmail.password);
        if(CheckEmail){

            console.log(">>> input pass: ",rawData.password," Hashpass: ",CheckEmail.password )
            const CorrectPassword = checkPassword(rawData.password, CheckEmail.password);
            if(CorrectPassword === true)
            {

                console.log(">>> login is success")
                return {
                    EM: 'oke',
                    EC: 0,
                    DT: ''
                }
            }
            else{
                console.log(">>> login is fail")
                return {
                    EM: 'password or email is wrong',
                    EC: 1,
                    DT: ''
                }
            }
        }
        else
        {
            return {
                EM: 'email or password is not correct',
                EC: 2,
                DT: ''
            }
        }
        
    }catch(error)
    {
        console.log(">>> check error: ",error);
        return {
            EM: 'something wrongs in service ...',
            EC: 3,
            DT: ''
        }
    }


}
module.exports ={
    RegisterNewUser, handlelogin
}
