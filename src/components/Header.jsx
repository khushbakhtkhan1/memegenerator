import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <img src="./trollface.jfif" 
        className='header-img'
        alt="troll face" />
        <h2 className='header-title'>Header</h2>
        <h4 className='header-meme'>React Meme-Generator</h4>
    </header>
  )
}

export default Header