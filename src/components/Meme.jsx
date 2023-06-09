import React, { useEffect, useState } from 'react';

const Meme = () => {
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages,setAllMemeImages]=useState()

    useEffect(async()=>{
        const res=await fetch("https://api.imgflip.com/get_memes")
        const data=await res.json()
        setAllMemeImages(data.data.memes)
    },[])

    function getMemeImage() {
        const randomNumber=Math.floor(Math.random()*allMemeImages.length)
        const url=allMemeImages[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }

    function handleChange(event){
        const{name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]: value
        }))
    }

  return (
    <main>
        <div className='form'>
            <input 
            type="text" 
            className='form-input' 
            placeholder='Top text'
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
            <input 
            type="text" 
            className='form-input' 
            placeholder='Bottom text'
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button className='form-button'
            onClick={getMemeImage}>Acquire a recently created meme picture 🖼</button>
        </div>
        <div className='meme'>
        <img src={meme.randomImage} className='meme-image'/>
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme