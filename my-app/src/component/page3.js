import React from 'react';
import ScrollToTop from './ScrollToTop';
import '../style.css';
import VideoBox from './videobox';

function Videodata() {
    return ( 
    <div>
        <body>

            <div class="row">

                <VideoBox path={'https://www.youtube.com/embed/D0-JbxX209g'}/>
                <VideoBox path={'https://www.youtube.com/embed/ZYAzo5OdqHM'}/>
                <VideoBox path={'https://www.youtube.com/embed/QrR_gm6RqCo'}/>
                <VideoBox path={'https://www.youtube.com/embed/h6fcK_fRYaI'}/>
                
            </div>

            <div class="row">

                <VideoBox path={'https://www.youtube.com/embed/5qap5aO4i9A'}/>
                <VideoBox path={'https://www.youtube.com/embed/H3LlT8bxvIs'}/>
                <VideoBox path={'https://www.youtube.com/embed/UmuSilXskzs'}/>
                <VideoBox path={'https://www.youtube.com/embed/MAlSjtxy5ak'}/>   
                
            </div>

            <div class="row">

                <VideoBox path={'https://www.youtube.com/embed/9-XbXBq8cl8'}/>
                <VideoBox path={'https://www.youtube.com/embed/WX0xWJpr0FY'}/>
                <VideoBox path={'https://www.youtube.com/embed/vGQQbulRUjY'}/>
                <VideoBox path={'https://www.youtube.com/embed/SEaFHPvuE6Y'}/>

            </div>

            <ScrollToTop/>

        </body>
    </div>
    )
}

export default Videodata