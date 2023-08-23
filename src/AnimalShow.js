import { useState } from 'react'
import './AnimalShow.css'


import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'





const svgMap={
bird,
cat,
cow,
dog,
gator,
horse

}



function AnimalShow({type}) {
  const[click,SetClick]=useState(0);


const handleClick=()=>{

SetClick(click+1)

}
  
  return <div className="animal-show" onClick={handleClick}>
    <img className="animal" src={svgMap[type]} alt="Aniamlas picture" />
    <img className='heart' src={heart} alt="" 
    style={{width:10 + 10 * click + 'px'}}
    
    />
  </div>;
}

export default AnimalShow;
