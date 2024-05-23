import React from 'react';
import img1 from './c.jpg'
import img2 from './C++.png'
import img3 from './css.png'
import img4 from './flask.png'
import img5 from './html.jpg'
import img6 from './js.jpg'
import img7 from './python.png'
import img8 from './react.png'
export default function Skills(){
    const [currentIndex, setCurrentIndex] = React.useState(0);

    function showPrev() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 8) % 8);
      }
    
      function showNext() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
      }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>SKILLS</h1>
        <div className='slides'>
        <div className='skill' style={{ transform: `translateX(${-currentIndex * 400}px)` }}>
            <img src={img8}></img>
            <img src={img2}></img>
            <img src={img6}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img3}></img>
            <img src={img7}></img>
            <img src={img1}></img>
        </div>
        <div className='button-cover'><button class="slider-arrow" id="prev-arrow" onClick={showPrev}>&#9665;</button></div>
        <button class="slider-arrow" id="next-arrow" onClick={showNext}>&#9655;</button>
        </div>
        </div>
    )
}