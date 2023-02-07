import React from "react";
import axios from 'axios'
import {storeData} from '../storage/storage'




export const signUp = async (fullname, email,password)=>{

    const request = await axios.post("http://192.168.1.104:8080/api/signup", {
        fullname: fullname,
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
    })

    return request.data

}


export const signIn = async (email, password)=>{
    const request = await axios.post("http://192.168.1.104:8080/api/signin", {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
    })

    return request
}