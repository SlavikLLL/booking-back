import allowOrigins from "./allowOrigins.js";

const corsOptions = {
    origin:(origin,callback) =>{
        if(allowOrigins.indexOf(origin !== -1 || !origin)){
            callback(null,true)
        }else{
            callback(new Error('not allowed by cors'))
        }
    },
    Credential:true,
    optionsSuccessState:200
}
export default corsOptions;