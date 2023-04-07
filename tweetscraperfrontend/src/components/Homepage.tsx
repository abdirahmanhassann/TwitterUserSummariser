import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.tsx';

interface IAPI{
    text:string;
    user:{
        username:string;
    }
}



function Homepage() {

    const [user,setuser]=useState<String>('')
    const [loading,setloading]=useState<Boolean>(false)
    const [apiinfo,setapiinfo]=useState<String>('')
    const navigate=useNavigate()
    //a8f51f3f0emsh0776f217a544603p158b49jsn947a18196a1d
    //3080ae25famsh2a48333bf8619d4p118e5djsnbca874ca3480
const clint:any=[]
function clicked(e){
    setloading(true)
    setapiinfo('')
    e.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c20809c96dmsh0b41db4c1c11af4p1f6953jsn3cf0793e646b',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    fetch(`https://twitter154.p.rapidapi.com/user/tweets?username=${user}&limit=35&include_replies=true`, options)
        .then(response => response.json())
        .then(response => 
            {
                response.results.forEach((i:IAPI) => {
                    let newword=i.text.replace(/@\w+/g, "");
                    if(i.user.username!==user) return null
                    clint.push(newword)
                });
                const g=clint.join('').slice(0,100)
                console.log(g)
       
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': 'c20809c96dmsh0b41db4c1c11af4p1f6953jsn3cf0793e646b',
                        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
                    },
                    body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":" write a 1-3 paragraph report on user ${user} based on these tweets: ${g}. if it contains any derogatry or foul language,briefly educate us on why its wrong and skip over it"}]}`
                }
                fetch('https://openai80.p.rapidapi.com/chat/completions', options)
                    .then(response => response.json())
                    .then(response => {console.log(response)
                    setloading(false)
                    setapiinfo(response?.choices[0]?.message.content)
                })
                .catch(err => {
                    console.error(err)
                    setloading(false)
                    setapiinfo('Error with ChatGPT API')
                    });     
            }
            )
        .catch(err =>{ 
console.log(err)
setloading(false)
setapiinfo('Error with Twitter API')

           } );
}
  return (
    <>
<nav>
    <p className='navP'>Twitter summariser</p>
    <div className='flex-row'>
    <p className='navP' onClick={()=>navigate('/about')}>About</p>
    <p className='navP' onClick={()=>window.open('https://abdirahmanhassann.github.io/')}>Contact</p>
    </div>
</nav>
<form className='centerdiv' onSubmit={clicked}>
    <h2>Add a twitter account to summarise</h2>
    <input  placeholder='Twitter handle(@Chelseafc)' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setuser(e.target.value)}/>
    <button >Load summary</button>
{
    loading && <p>loading</p>
}
{
    apiinfo && <p style={{ whiteSpace: 'break-spaces'}}>{apiinfo}</p>
}
</form>
<Footer/>
    </>
    )
}

export default Homepage