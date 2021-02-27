import React, { useState } from 'react';
import ScrollToTop from "./ScrollToTop";
import '../style.css';
import ImageBox from './imagebox';

function Imagedata(){
    var img0 = require('./doge/IMG_2124.JPG')
    var img1 = require('./doge/IMG_2125.JPG')
    var img2 = require('./doge/IMG_2126.JPG')
    var img3 = require('./doge/IMG_2127.JPG')
    var img4 = require('./doge/IMG_2128.JPG')
    var img5 = require('./doge/IMG_2219.JPG')
    var img6 = require('./doge/IMG_2221.JPG')
    var img7 = require('./doge/IMG_2222.JPG')
    var img8 = require('./doge/IMG_2223.JPG')
    var img9 = require('./doge/IMG_2224.JPG')
    var img10 = require('./doge/IMG_2225.JPG')
    var img11 = require('./doge/IMG_2226.JPG')


    function OpenImg(){

        var modal = document.getElementById("myModal-img");
        var modalImg = document.getElementById("img01");
            
        modalImg.src = './doge/IMG_2124.JPG'
        modal.style.display = "block";
    
        window.onclick = function(event) { 
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    return (
        <div>
            <body>
                <div class="row">

                <ImageBox path={img0.default}/>
                <ImageBox path={img1.default}/>
                <ImageBox path={img2.default}/>
                <ImageBox path={img11.default}/>
                </div>

                <div class="row">
                <ImageBox path={img4.default}/>
                <ImageBox path={img5.default}/>
                <ImageBox path={img6.default}/>
                <ImageBox path={img7.default}/>
                </div>

                <div class="row">
                <ImageBox path={img8.default}/>
                <ImageBox path={img9.default}/>
                <ImageBox path={img10.default}/>
                <ImageBox path={img3.default}/>
                </div>
                
                <ScrollToTop/>

            </body>
        </div>
    )
}

export default Imagedata;