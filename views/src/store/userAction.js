import {users,errors} from "./userSlice";
// import axios from "../axios";
import axios from "../axios";

export const aysncuser = ()=> async(dispatch)=>{
    try {
        
        const {data} = await axios.get('/home')
        console.log(data.userfil)
        dispatch(users(data.userfil))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}

export const aysncphone = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get('/phone')
        console.log(data)
        dispatch(users(data.malephone))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}

export const aysnclast = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get('/lastname')
        console.log(data.lastnames)
        dispatch(users(data.lastnames))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}

export const aysnccarbrand = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get('/carbrands')
        console.log(data.carbrands)
        dispatch(users(data.carbrands))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}

export const aysnctop = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get('/topcities')
        console.log(data.top10Cities)
        dispatch(users(data.top10Cities))
    } catch (err) {
        console.log(err)
        dispatch(errors(err.response.data.message));
    }
}