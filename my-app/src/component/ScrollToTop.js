import React, {useState, useEffect} from 'react';
import '../style.css';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })


    const checkScrollTop = () => {
        var max = window.innerHeight * .25
        if (!showScroll && window.pageYOffset > max){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= max){
            setShowScroll(false)
        }
    };

    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    return (
        <button id= "scrollbtn"className="scrollbtn" onClick={scrollUp} style={{display: showScroll ? 'flex' : 'none'}}>Back<br/>To Top</button>
    );
}


export default ScrollToTop