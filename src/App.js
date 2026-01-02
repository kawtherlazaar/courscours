import React from 'react'
import Menu from './Menu'
import Heading from './Heading'
import Cards from './Cards'
import './App.css'
function App() {
    let name='hello';
    let offer='50% off';
   
  return (
    
    <div>
        <img src={require('../src/profile.png')} alt="profile" />
        <img src={'https://www.shutterstock.com/image-vector/beautiful-girl-pink-hijab-muslim-260nw-2443591467.jpg '}></img>
        <Menu />
        <Heading />
        <Cards />

      <h1 className='h1style'>{name} {offer}</h1>
    
    </div>
  )
}

export default App