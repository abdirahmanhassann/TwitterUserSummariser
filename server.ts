import { Request, Response } from "express";

const importDynamic = new Function('modulePath', 'return import(modulePath)');

const fetchh = async (...args:any[]) => {
    const module = await importDynamic('node-fetch');
    return module.default(...args);
};
const express=require('express')
require('dotenv').config()
const app=express()
const port=5005
const clint:any=[]

interface IAPI{
    text:string;
    user:{
        username:string;
    }
}

app.get('/',(req:Request,res:Response)=>{
    
    const tweet=req.query.user
    console.log(tweet)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.TWITTER_API_KEY,
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };
    
    fetchh(`https://twitter154.p.rapidapi.com/user/tweets?username=${tweet}&limit=50&include_replies=true`, options)
        .then(response => response.json())
        .then(response => 
            {

                response.results.forEach((i:IAPI) => {
                    let newword=i.text.replace(/@\w+/g, "");
                    if(i.user.username!==tweet) return null
                    clint.push(newword)
                });




                res.send(clint)
            }
            )
        .catch(err => 
            res.send(err)
            );

})

    app.listen(port,()=>{
            console.log(`app is listening on port ${port}....`)
})