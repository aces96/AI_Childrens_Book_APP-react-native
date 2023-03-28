import React from "react";
import axios from 'axios'
import {storeData} from '../storage/storage'





export const signUp = async (fullname, email,password)=>{


    const request = await axios.post("https://summerfoxstorytime.com/api/signup", {
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
    console.log('requeeest');

    const request = await axios.post("https://summerfoxstorytime.com/api/signin", {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
    })


    console.log('requeeest',request.data);



    return request
}

export const generateStory = async (prompt, themes, character)=>{
        try {
            const generateStory = await axios.post("http://summerfoxstorytime.com:8080/api/generateStory", {
                character: character,
                description: prompt,
                theme: themes
            }, {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    }  
            })

            // const data =  [generateStory.data.title.choices[0].text, generateStory.data.story.choices[0].text]

                return generateStory
            
        } catch (error) {
            return error
        }
}