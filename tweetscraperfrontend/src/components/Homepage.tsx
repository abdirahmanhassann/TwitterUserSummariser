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
function clicked(e){
    e.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a8f51f3f0emsh0776f217a544603p158b49jsn947a18196a1d',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    fetch(`https://twitter154.p.rapidapi.com/user/tweets?username=${user}&limit=10&include_replies=true`, options)
        .then(response => response.json())
        .then(response => 
            {
                response.results.forEach((i:IAPI) => {
                    let newword=i.text.replace(/@\w+/g, "");
                    if(i.user.username!==user) return null
                    clint.push(newword)
                });
                console.log(clint.join(''))
       
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': 'a8f51f3f0emsh0776f217a544603p158b49jsn947a18196a1d',
                        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
                    },
                    body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":" write a report on this user based on tweets. if it contains any derogatry or foul language skip over it :   ${clint.join('')}"}]}`
                };
                
                fetch('https://openai80.p.rapidapi.com/chat/completions', options)
                    .then(response => response.json())
                    .then(response => console.log(response))
                    .catch(err => console.error(err));
                
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
<form className='centerdiv' onSubmit={clicked}>
    <h2>Add a twitter account to summarise</h2>
    <input  placeholder='Twitter handle (@Chelseafc)' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setuser(e.target.value)}/>
    <button >Load summary</button>
</form>
    </>
    )
}

export default Homepage