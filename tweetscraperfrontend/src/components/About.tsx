import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer.tsx'

function About() {
    const navigate=useNavigate()
  return (
    <>
    <nav>
    <p className='navP' onClick={()=>navigate('/')} >Twitter summariser</p>
    <div className='flex-row'>
    <p className='navP'>About</p>
    <p className='navP' onClick={()=>window.open('https://abdirahmanhassann.github.io/')}>Contact</p>
    </div>
</nav>
    <div className='centerdiv'>
        <h2>What would it take for an AI to summarise someones entire lifetime online activity?</h2>
        <p>This was a hobby project and I wanted to see what it would take to achieve this task. It is a typical "Ship of Theseus" problem with countless variables. Since this was a hobby project, I started with two variables.
</p>
    <li>Memory</li>
    <li>Prompt and expression style</li>

<h3>Technical Limitations</h3>
<p>Current-gen AIs like ChatGPT are trained on billions of data points, but this is only the data available in the public domain. You would need a lot of personal data to give a semblance of personality.</p>
    <h3>Key Challenges</h3> 
   
<li>  No personal data </li>
<li>ChatGPT through code cannot remember the context</li>
 <li>I can only give ~200 characters to GPT 3.5 right now to train on someone’s tweets. The new GPT 4 will offer up to ~24k words but it will come with a very aggressive per-word pricing</li>
<li>Training any model on millions of words can be expensive</li>
    
    <h3>Summary</h3>
    <li>Cost of developement: £0</li>
    <li>Developement time: 2 days</li>
    <li>API's used: Twitter API, ChatGPT API</li>
    </div>
    <Footer/>
    </>
  )
}

export default About