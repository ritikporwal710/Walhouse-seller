import JWT from "jsonwebtoken";

export const requireSignIn = async (req,res,next) =>{
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT.SECRET);
        next()
    } catch (error) {
        console.log(error);
    }
}