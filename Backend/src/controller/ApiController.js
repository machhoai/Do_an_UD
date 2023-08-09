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
        const data =await LoginRegisterService.handlelogin(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(">>> error: ", error)
    }
}
module.exports = {
    ApiHome, handleregister, handlelogin
}
