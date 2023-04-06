import React, { useState } from 'react'

interface IAPI{
    text:string;
    user:{
        username:string;
    }
}



function Homepage() {

    const [user,setuser]=useState('')
const clint:any=[]
function clicked(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a8f51f3f0emsh0776f217a544603p158b49jsn947a18196a1d',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    fetch(`https://twitter154.p.rapidapi.com/user/tweets?username=${user}&limit=50&include_replies=true`, options)
        .then(response => response.json())
        .then(response => 
            {

                response.results.forEach((i:IAPI) => {
                    let newword=i.text.replace(/@\w+/g, "");
                    if(i.user.username!==user) return null
                    clint.push(newword)
                });
                console.log(clint)
            }
            )
        .catch(err => 
console.log(err)
            );


}
  return (
    <>
<nav>
    <p className='navP'>TweetScraper</p>
    <div className='flex-row'>
    <p className='navP'>about</p>
    <p className='navP'>contract</p>
    </div>
</nav>
<div className='centerdiv'>
    <h2>Add a twitter account to summarise</h2>
    <input  placeholder='Twitter handle (@Chelseafc)' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setuser(e.target.value)}/>
    <button onClick={clicked}>Load summary</button>
</div>
    </>
    )
}

export default Homepage