import react from 'react'
import Menu from './Menu'
import Heading from './Heading'
import Cards from './Cards'
import './App.css'
import Sayhello from './Sayhello'
function App() {
    let name='hello';
    let offer='50% off';
    let arr = [1, 2, 3];
    
    let person={ firstName:'John', lastName:'Doe' };
  return (
    
    <div>
        
    {/*     <img src={require('../src/profile.png')} alt="profile" />
        {/* eslint-disable-next-line jsx-a11y/alt-text }
        <img src={'https://www.shutterstock.com/image-vector/beautiful-girl-pink-hijab-muslim-260nw-2443591467.jpg '}></img> */}
        <Menu />
        <Heading />
        <Cards />

      <h1 className='h1style'>{name} {offer}</h1>
       
       <Sayhello props={person} />

       </div>
  )
}

export default App